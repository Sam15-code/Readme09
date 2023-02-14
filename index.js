const inquirer = require("inquirer")
const createMarkdown = require("./utils/createMarkdown")
const fs=require("fs") //file system


function init(){
    inquirer.prompt([
     
        {
            type:"input",
            message:"Enter Project title",
            name:"title"
        },
        {
            type:"input",
            message:"Enter Project Description",
            name:"description"
        },
        {
            type:"input",
            message:"Enter Project Contributors",
            name:"readme"
        },
        {
            type:"input",
            message:"Enter Project Installation requirments",
            name:"instal"
        },
        {
            type:"input",
            message:"Enter Project testing",
            name:"testing"
        },
        {
            type:"list",
            message:"Enter Project License ",
            name:"license",
            choices:["MIT","ISC","GPL","Apache 2.0","No Licnse"]
        },
        {
            type:"input",
            message:"Enter Project Usage",
            name:"usage"
        },
        {
            type:"input",
            message:"Enter Email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Github username",
            name:"github"
        },
    ]).then(response => {
        writeToFile("README.md",response)
    })

}


function writeToFile(file,content){
    fs.writeFileSync(file,createMarkdown(content),function(err,data){
        if(err) throw err
    })
}


init()