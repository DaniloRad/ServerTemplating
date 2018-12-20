const fs=require("fs");
const express=require("express");
const hbs=require("hbs");

const app=express();



hbs.registerPartials(__dirname+"/views/partials");



app.set("view engine","hbs");


hbs.registerHelper("currentYear",()=>{
return  (new Date().getFullYear());
});
hbs.registerHelper("toUpper",(text)=>{
    return text.toUpperCase();
})

app.use((req,res,next)=> {
    res.render("mainenance.hbs");
})

app.get("/",(req,res)=> {

    console.log("url:/");
    res.render("home.hbs",{
    pageTitle:"Home page",
    welcomeMessage:"Welcome",
        

    });


})
app.get("/about",(req,res)=> {

    console.log("url:/");
    res.render("about.hbs",{
    pageTitle:"about page",
    welcomeMessage:"Welcome",

})
})
app.get("/help",(req,res)=> {

    console.log("url:/");
    res.render("help.hbs",{
    pageTitle:"help page",
    welcomeMessage:"Welcome",
})
})
app.listen(3000);