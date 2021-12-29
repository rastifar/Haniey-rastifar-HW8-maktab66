function ingExtractor(text) {
    //for monosylabic word
    //return word.match(/[aeiouy]{1,2}/g).length;

    // .where(x=> x.EndsWith("ing"));
    // text= text.split(/\s*(?:;|$)\s*/).join("")

    //to remove "," in the input
    //replace(/\,/g,"")

    let result = []

    text= text.replace(/\,/g,"").split(" ").filter(x=>x.endsWith("ing"))

    for (const iterator of text) {
        if (iterator.match(/[aAeEiIoOuUyY]/g).length >1 ) {
           result.push(iterator)         
        }
        
    }
    if(result.length != 0){
        console.log(result)
    }else{
        console.log("No words inflected by \"-ing\"")
    }
   
}


console.log("input string : \"coming bringing Letting sing\"")
ingExtractor("coming bringing Letting sing")
console.log("-------------------------------------------------")

console.log("input string : \"going Ping, king sHrink dOing\"")
ingExtractor("going Ping, king sHrink dOing")
console.log("--------------------------------------------------")

console.log("input string : \"zing went ring, ding wing SINk\"")
ingExtractor("zing went ring, ding wing SINk")
console.log("--------------------------------------------------")






//https://stackoverflow.com/questions/28384718/regex-understanding-syllable-counter-code
//https://stackoverflow.com/questions/28915525/regex-identify-words-that-contain-ing