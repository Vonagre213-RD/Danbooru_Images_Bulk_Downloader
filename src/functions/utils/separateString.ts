
 function separateString(arrString:string){
    return arrString.trim().split(",").filter(tag => {
        if(tag.length === 0){
            return false
        }
        return true
    })
 }

 export {separateString}