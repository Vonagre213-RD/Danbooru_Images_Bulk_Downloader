
import { longDownloadReport, shortDownloadReport } from "../../state/state.js";
import fs from 'fs'

function reportCreator() {
    if (!fs.existsSync('./report')) {
        fs.mkdirSync('./report')
    }
    const longJson = JSON.stringify(longDownloadReport, null, 2);
    const shortJson = JSON.stringify(shortDownloadReport, null, 2);

    fs.writeFileSync('./report/longDownloadReport.json', longJson)
    fs.writeFileSync('./report/shortDownloadReport.json', shortJson)
}

export { reportCreator }