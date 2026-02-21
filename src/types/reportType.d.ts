export type reportImageType = {
    post_id: int,
    tags: string[],
    image_width: number,
    image_height: number
    page: number,
    artist: string
}

export interface longReportInterface {
    total_downloaded_Images: number,
    total_pages_fetched: number,
    tags_used: {
        includes: string[],
        excludes: string[]
    },
    characters: string[]
    artists: string[]
    downloaded_images: reportImageType[]
    errors: number
}

export type shortReportImageType = {
    post_id: int,
    page: number,
    artist: string
}

export interface shortReportInterface {
    total_downloaded_Images: number,
    total_pages_fetched: number,
    tags_used: {
        includes: string[],
        excludes: string[]
    },
    characters: string[]
    artists: string[]
    downloaded_images: shortReportImageType[]
    errors: number
}