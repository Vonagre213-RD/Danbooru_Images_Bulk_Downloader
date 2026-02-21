import { DanbooruPost } from "../../types/postType.js";
import { longDownloadReport, shortDownloadReport, state } from "../../state/state.js";
import { separateString } from "../utils/separateString.js";

function AddPostToReport(post: DanbooruPost) {
    longDownloadReport.total_downloaded_Images++
    shortDownloadReport.total_downloaded_Images++

    longDownloadReport.downloaded_images.push({
        post_id: post.id,
        tags: post.tag_string_general.split(" "),
        image_height: post.image_height,
        image_width: post.image_width,
        page: state.pagination.page,
        artist: post.tag_string_artist,
    });

    shortDownloadReport.downloaded_images.push({
        post_id: post.id,
        page: state.pagination.page,
        artist: post.tag_string_artist,
    });

    const characters: string[] = separateString(post.tag_string_character);
    const artists: string[] = separateString(post.tag_string_artist)

    characters.forEach(char => {
        longDownloadReport.characters.push(char);
        shortDownloadReport.characters.push(char);
    });
    artists.forEach(char => {
        longDownloadReport.artists.push(char);
        shortDownloadReport.artists.push(char);
    });
}

export { AddPostToReport }