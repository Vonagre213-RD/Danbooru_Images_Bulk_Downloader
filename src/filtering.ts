import { DanbooruPost } from "./types/postType.js";
import { state } from "./state/state.js";

function postPagesFiltering(post: DanbooruPost[]) {

    let removedList = 0
    const filteredPost = post.filter((post) => {
        const postTags: string[] = post.tag_string_general.split(" ");

        state.tags.excludeTags.forEach(tag => {

            if (postTags.includes(tag)) {
                removedList++
                return false
            }
        })
        state.tags.includeTags.forEach(tag => {

            if (!postTags.includes(tag)) {
                removedList++
                return false
            }
        })

        return true


    })

    return filteredPost
}

export { postPagesFiltering }