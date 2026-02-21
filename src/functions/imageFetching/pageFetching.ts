import { safeFetch } from "../utils/safeFetch.js";
import { DanbooruPost } from "../../types/postType.js";
import { longDownloadReport, shortDownloadReport, state } from "../../state/state.js";


async function pageFetching(): Promise<DanbooruPost[]> {


    if (state.pagination.maxPages.toLowerCase() !== "all" && state.pagination.page === Number(state.pagination.maxPages)) {
        state.isDownloading = false;
        throw new Error("!!!--- Page limit reached ---!!!");
    }
    const response = await safeFetch(`https://danbooru.donmai.us/posts.json?tags=${state.tags.baseTags}&limit=${state.pagination.limit}&page=${state.pagination.page}`)

    const resJson = await response!.json() as DanbooruPost[];

    if (resJson.length === 0) {
        state.isDownloading = false
        throw new Error("!!!--- No images found ---!!!")
    }

    const newPage = state.pagination.page + 1
    longDownloadReport.total_pages_fetched = newPage;
    shortDownloadReport.total_pages_fetched = newPage;
    state.pagination.page = newPage;

    return resJson;
}

export { pageFetching }