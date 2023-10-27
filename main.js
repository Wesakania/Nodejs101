let fs = require("fs");
/*let newText = fs.readFileSync("./Text/inputOne.txt", "utf-8");
console.log(newText);

let newArticle = "Hello guys, How do I get to the new phase in my life?"
fs.writeFileSync("./Text/outPut.txt", newArticle,  "utf-8");
console.log("The file is written!")*/


fs.readFile("./Text/readThis.txt", "utf-8",(err,data)=>{
    console.log(data);
})

let newLife = "Keep breaking your potential all the time. Remeber the 40% Rule";

fs.writeFile("./Text/anotherOne.txt", `${newLife}` ,err =>{
    console.log("file is written");
})

console.log("This file is well Written")