import { longReportInterface, shortReportInterface } from "../types/reportType.js";
import { loadState } from "../functions/utils/loadState.js";


let state = await loadState();




const longDownloadReport: longReportInterface = {
    total_downloaded_Images: 0,
    total_pages_fetched: 0,
    downloaded_images: [],
    tags_used: {
        includes: state.tags.includeTags,
        excludes: state.tags.excludeTags
    },
    artists: [],
    characters: [],
    errors: 0
}

const shortDownloadReport: shortReportInterface = {
    total_downloaded_Images: 0,
    total_pages_fetched: 0,
    downloaded_images: [],
    tags_used: {
        includes: state.tags.includeTags,
        excludes: state.tags.excludeTags
    },
    artists: [],
    characters: [],
    errors: 0
}
export { state, longDownloadReport, shortDownloadReport }
