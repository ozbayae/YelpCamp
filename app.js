const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

const campgrounds = [
    {name: "Somewhere Garden", image: "http://photosforclass.com/download/321487195"}
    ,{name: "Otherplace Hill", image: "http://photosforclass.com/download/3823437635"}
    ,{name: "Mountain Peak's Rest", image: "http://photosforclass.com/download/1430198323"}
    ,{name: "Otherplace Hill", image: "http://photosforclass.com/download/3823437635"}
    ,{name: "Mountain Peak's Rest", image: "http://photosforclass.com/download/1430198323"}
    ,{name: "Otherplace Hill", image: "http://photosforclass.com/download/3823437635"}
    ,{name: "Mountain Peak's Rest", image: "http://photosforclass.com/download/1430198323"}
    ,{name: "Otherplace Hill", image: "http://photosforclass.com/download/3823437635"}
    ,{name: "Mountain Peak's Rest", image: "http://photosforclass.com/download/1430198323"}
]

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {

    res.render("campgrounds", {campgrounds: campgrounds})
})

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgrounds array
    const name = req.body.name
    const image = req.body.image
    const newCampground = {name: name, image: image}
    
    campgrounds.push(newCampground)
    
    //redirect to campgrounds
    res.redirect("/campgrounds") 
})

app.get("/campground")

app.listen(3000, () => {
    console.log("I'm online and listening!")
})