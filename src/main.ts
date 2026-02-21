import { pageFetching } from "./functions/imageFetching/pageFetching.js";
import { postPagesFiltering } from "./filtering.js";
import { bulkDownloader } from "./functions/downloader/bulkdownloader.js";
import { state } from "./state/state.js";
import { loadState } from "./functions/utils/loadState.js";
import { longDownloadReport, shortDownloadReport } from "./state/state.js";
import { reportCreator } from "./functions/utils/reportCreator.js";

async function Main() {
   loadState()
   state.isDownloading = true;

   while (state.isDownloading == true) {
      console.log(`\n[====Downloading page: ${state.pagination.page} ====]`)

      try {

         const unFilteredPage = await pageFetching()

         const filteredPage = postPagesFiltering(unFilteredPage)

         await bulkDownloader(filteredPage)
      }
      catch (error) {
         if (error instanceof Error) {
            console.log(`${error.message} `)
            continue;
         }
      }


   }

   const sanitizedArtistLong = new Set(longDownloadReport.artists)
   const sanitizedCharactersLong = new Set(longDownloadReport.characters)

   longDownloadReport.artists = [...sanitizedArtistLong];
   longDownloadReport.characters = [...sanitizedCharactersLong];

   const sanitizedArtistShort = new Set(shortDownloadReport.artists)
   const sanitizedCharactersShort = new Set(shortDownloadReport.characters)

   shortDownloadReport.artists = [...sanitizedArtistShort];
   shortDownloadReport.characters = [...sanitizedCharactersShort];

   reportCreator()

   console.log(`[======= Download finished, total images downloaded: ${shortDownloadReport.total_downloaded_Images} =======]`)
}

Main()