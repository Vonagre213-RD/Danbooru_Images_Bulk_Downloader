import { xmlParser } from "./xmlReader.js";
import { downloadInfoType } from "../../types/downloadInfoType.js";
import { StateType } from "../../types/stateType.js";
import { separateString } from "./separateString.js";
import fs from 'fs'



async function loadState(): Promise<StateType> {
    if (!fs.existsSync("./downloadInfo.xml")) {
        const downloadInfoFile = `<downloadInfo outputPath="./images" limit="1" maxPages="1" separationByArtist="false">
        <!-- write "all" in maxPages so you download all the images -->
        <baseTags>
        </baseTags>
        <includeTags>
        </includeTags>
        <excludeTags>
        </excludeTags>
    </downloadInfo>`

        console.log("./downloadInfo.xml doesn't exists!! \n ---creating downloadInfo.xml file and exiting program ")

        fs.writeFileSync('./downloadInfo.xml', downloadInfoFile)

        console.log("---file created, configure it and run the program again")
        process.exit(1);
    }
    const xmlObject: downloadInfoType = await xmlParser("./downloadInfo.xml")
    return {
        tags: {
            baseTags: xmlObject.downloadInfo.baseTags.replace(" ", "+"),
            includeTags: separateString(xmlObject.downloadInfo.includeTags),
            excludeTags: separateString(xmlObject.downloadInfo.excludeTags)
        },
        pagination: {
            page: 0,
            limit: Number(xmlObject.downloadInfo.limit),
            maxPages: xmlObject.downloadInfo.maxPages
        },
        outputPath: xmlObject.downloadInfo.outputPath,
        isDownloading: false,
        separationByArtist: xmlObject.downloadInfo.separationByArtist.toLowerCase() === "true",
        separationByPage: xmlObject.downloadInfo.separationByPage.toLowerCase() === "true"

    }
}

export { loadState }