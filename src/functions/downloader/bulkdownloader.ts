import { DanbooruPost } from "../../types/postType.js";
import { downloadImage } from "./downloadImage.js";
import { state } from "../../state/state.js";
import fs from 'fs';

async function bulkDownloader(pages: DanbooruPost[]) {

    if (!fs.existsSync(state.outputPath)) {
        fs.mkdirSync(state.outputPath, {recursive: true});
    }

    for (const page of pages) {
        try {

            await downloadImage(page)
        }
        catch (error) {

            if (error instanceof Error) {

                console.log(error.message)
            }
            continue;
        }
    }

}

export { bulkDownloader }