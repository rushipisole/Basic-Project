// // const express = require("express");
// // const app = express();
// // const port = 8080;

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// // app.get("/register", (req, res) => {
// //     let { user } = req.query;
// //     res.send(
// //         `Standarize GET Responce, Welcome ${user}!`
// //     )
// // });
// // app.post("/register", (req, res) => {
// //     console.log(req.body)
// //     res.send(
// //         "Standarize POST  Responce"
// //     )
// // });
// // // app.use((req, res) => {
// // //     console.log("request receive")
// // //     res.send({
// // //         name: "Rushi"
// // //     });
// // // })

// // app.listen(port, () => {
// //     console.log(`Listening to ${port}`)
// // })


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         super(name, age);
//         this.marks = marks;
//     }
// }

// ===============================================================================================================


const express = require("express");
const path = require('path');
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "Rushi",
        content: "Hello I love code"
    },
    {
        id: uuidv4(),
        username: "Parth",
        content: "Hello I love Cooking"
    },
    {
        id: uuidv4(),
        username: "Vrushali",
        content: "Hello I love Rushi"
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content })
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post })
})

app.listen(port, () => {
    console.log("listening the port 8080")
})