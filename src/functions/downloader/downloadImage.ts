import { DanbooruPost } from "../../types/postType.js";
import * as path from 'path'
import fs from 'fs'
import { safeFetch } from "../utils/safeFetch.js";
import { finished } from "stream/promises";
import { Readable } from "stream";
import { AddPostToReport } from "../reportCreator/AddPostToReport.js";
import { separateString } from "../utils/separateString.js";
import { longDownloadReport, shortDownloadReport, state } from "../../state/state.js";

const BASEURL = 'https://cdn.donmai.us'
const Variant = 'original'


function getImageCode(post: DanbooruPost) {
    const code1 = post.md5.slice(0, 2);
    const code2 = post.md5.slice(2, 4);
    const code = `${code1}/${code2}`;

    const url = `${BASEURL}/${Variant}/${code}/${post.md5}.${post.file_ext}`
    return url
}

async function downloadImage(post: DanbooruPost) {
    let basePath = "";

    if (post.is_banned == true) {
        longDownloadReport.errors++
        shortDownloadReport.errors++
        throw new Error("!!!---This image was banned, proceeding with another one---!!!")
    }
    const url = getImageCode(post)
    const res = await safeFetch(url)

    if (typeof res == undefined) {
        longDownloadReport.errors++
        shortDownloadReport.errors++
        throw new Error("!!!---Couldn't fetch from media url for post with the id:" + post.id + "---!!!")
    }
    basePath = path.join(`${state.outputPath}`, `${post.id}.${post.file_ext}`)

    if (state.separationByArtist && !state.separationByPage) {
        const artist = separateString(post.tag_string_artist)[0];

        if (!fs.existsSync(`${state.outputPath}/${artist}`)) {
            fs.mkdirSync(`${state.outputPath}/${artist}`)
        }
        basePath = path.join(`${state.outputPath}/${artist}`, `${post.id}.${post.file_ext}`)
    }

    if(state.separationByPage && !state.separationByArtist){
        if (!fs.existsSync(`${state.outputPath}/page_${state.pagination.page}`)) {
            fs.mkdirSync(`${state.outputPath}/page_${state.pagination.page}`)
        }
        basePath = path.join(`${state.outputPath}/page_${state.pagination.page}`, `${post.id}.${post.file_ext}`)

    }


    if(state.separationByArtist && state.separationByPage){
        const artist = separateString(post.tag_string_artist)[0];

        const pageDir = `${state.outputPath}/page_${state.pagination.page}`
        const artistDir = `${pageDir}/${artist}`
        if (!fs.existsSync(pageDir)) {
            fs.mkdirSync(pageDir)
        }
        if (!fs.existsSync(artistDir)) {
            fs.mkdirSync(artistDir)
        }
        
        basePath = path.join(`${state.outputPath}/page_${state.pagination.page}/${artist}`, `${post.id}.${post.file_ext}`)

    }

    console.log(`\n[---- Downloading post: ${post.id} ----]`)

    const stream = fs.createWriteStream(basePath)

    if (typeof res?.body == undefined) {
        longDownloadReport.errors++
        shortDownloadReport.errors++
        throw new Error("!!!---The body of this request was undefined for post with the id:" + post.id + "---!!!")
    }

    await finished(Readable.fromWeb(res!.body!).pipe(stream))

    AddPostToReport(post)

    console.log(`[---- Post: ${post.id} was downloaded succesfully ----]`)
}

export { downloadImage }