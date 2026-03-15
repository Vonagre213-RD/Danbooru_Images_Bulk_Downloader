
function separateString(arrString: string) {
    const separatedTags = arrString.trim().split(",")
    const sanitizedTags = separatedTags.map(tag => (
        tag.trim()
    ))

    return sanitizedTags.filter(tag => {
        if (tag.length === 0) {
            return false
        }
        return true
    })
}

export { separateString }