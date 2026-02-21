export interface StateType {
    tags:{    
        baseTags: string,
        includeTags: string[],
        excludeTags: string[],
    },
    pagination: {
        page: number,
        limit: number,
        maxPages: string
    }
    outputPath: string,
    isDownloading: boolean,
    separationByArtist: boolean,
    separationByPage:boolean
}