## If you're going to make a fork of this project or use it in your own please mention me ❤️

## Danbooru Images Bulk Downloader

hi! This is a project I made with typescrip
t to quickly download images from danbooru it also downloads gifts and videos from danbooru
# Pre requisites

1- This was made with **Node JS** so you must install it first before starting **download link ->**[Node.js — Descarga Node.js®](https://nodejs.org/es/download).

2- Also, I used **pnpm** instead of **npm** as package manager so you must install it first  **Official installation link ->** [Installation | pnpm](https://pnpm.io/installation).

3- If it doens't works, try moving it to the folder of your disk for example `C:\`, sometimes windows blocks pnpm from running in some folders.

# Installation 

1- First download the file from **GitHub** it will download a .zip, extract it and open the folder with your code editor or terminal, I will be using **Visual Studio** code for the guide.

2- Once you open the file, open a terminal and write:

```cmd
pnpm install
```

![Installation Information](./gitImages/Pasted%20image%2020260221194424.png)

3-That's all! You have already installed the image downloader! Now proceed to the usage guide!

# Usage

1- You will see that there is a file named `downloadInfo.xml` that's were you will write all the information about the images you want to download, like tags, paginations, limits etc  

```xml
<downloadInfo outputPath="./images" limit="5" maxPages="all" separationByPage="false" separationByArtist="false">

    <!-- write "all" in maxPages so you download all the images -->

    <baseTags>

    </baseTags>

    <includeTags>

    </includeTags>

    <excludeTags>

    </excludeTags>

</downloadInfo>
```

# Example

```xml
<downloadInfo outputPath="./images" limit="20" maxPages="10" separationByPage="true"

    separationByArtist="false">

    <!-- write "all" in maxPages so you download all the images -->

    <baseTags>

        hayakawa_tazuna

    </baseTags>

    <includeTags>

        horse_girl

    </includeTags>

    <excludeTags>

        kiryuin_aoi

    </excludeTags>

</downloadInfo>
```

# Tags Explanation

`downloadInfo`: This is the root tag who also contains the following attributes:

`outputPath`: This is the path where the images will be stored, if it doesn't exists the program will create it (make sure the outputPath is not protected or otherswise the program will fail unless you give it propper permissions), it is in `./images` by default.

`limit`: How many images a page will contain.

`maxPages`: How many pages it will download (it starts counting from 0, if you want to download 10 pages you will have to write 9), if you write "all" it will download all the available pages.

`separationByPage`: If is true, it will create a folder for each page and will save it's respective images there.

`separationByArtist`: If is true, it will create a folder for each artist and will save it's respective images there.

`baseTags`: These are the tags that the Danbooru api allows to use in the request, you can only place two if you place more the program will fail, unless you're a danbooru premium user in that case you should be able to place more.

These are optionals  but I recommend using them since it reduces the amount of unnecessary information the program has to fetch.

`IncludeTags`: these are the tags post must include to be downloaded.

`excludeTags`: these are the tags post must not include to be downloaded.

# How to execute:

Just write `pnpm run start` in your terminal and it will execute the program.

![Execution Information](./gitImages/Pasted%20image%2020260221194448.png)

# That's it! The program should start downloading the images!

If you find any bug please, write an issue I will be reading them time to time.