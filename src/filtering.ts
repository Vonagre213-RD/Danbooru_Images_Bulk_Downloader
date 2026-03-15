import { DanbooruPost } from "./types/postType.js";
import { state } from "./state/state.js";

function postPagesFiltering(post: DanbooruPost[]) {

    let removedList = 0
    const filteredPost = post.filter((post) => {
        const postTags: string[] = post.tag_string_general.split(" ");

        for (let tag of state.tags.excludeTags) {

            if (postTags.includes(tag)) {
                removedList++
                return false
            }
        }
        for (let tag of state.tags.includeTags) {

            if (!postTags.includes(tag)) {
                removedList++
                return false
            }
        }

        return true


    })

    return filteredPost
}

export { postPagesFiltering }