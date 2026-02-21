import { XMLParser } from "fast-xml-parser";
import fs from 'fs'


async function xmlParser(xmlPath:string) {
    const file = fs.readFileSync(xmlPath)
    const xmlParser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix:""
    })

    return await xmlParser.parse(file)
}

export {xmlParser}