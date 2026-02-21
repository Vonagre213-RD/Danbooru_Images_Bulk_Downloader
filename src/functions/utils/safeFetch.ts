import { longDownloadReport, shortDownloadReport } from "../../state/state.js";

export async function safeFetch(url: string) {

    try {
        const response = await fetch(url)
        if (!response.ok) {
            longDownloadReport.errors++
            shortDownloadReport.errors++
            throw new Error(`!!!---There was an error fetching in the url ${url}, HTTP: status: ${response.status}---!!!`)
        }
        return response;
    }
    catch (err) {
        console.log(err)
    }
}