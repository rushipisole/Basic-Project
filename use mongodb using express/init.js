const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main().then(() => { console.log("Connection Succesfull") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Rushi",
        to: "Sejal",
        msg: "Ai shitemasu",
        created_at: new Date()
    },
    {
        from: "Alex",
        to: "Jordan",
        msg: "Can I borrow your book?",
        created_at: new Date()
    },
    {
        from: "Taylor",
        to: "Morgan",
        msg: "Do you have the latest assignment?",
        created_at: new Date()
    },
    {
        from: "Jamie",
        to: "Casey",
        msg: "Could I get a copy of your notes?",
        created_at: new Date()
    },
    {
        from: "Riley",
        to: "Dakota",
        msg: "Could you send me your notes?",
        created_at: new Date()
    },
    {
        from: "Cameron",
        to: "Alexis",
        msg: "I need your notes for the exam.",
        created_at: new Date()
    },
    {
        from: "Jordan",
        to: "Avery",
        msg: "Would you mind sharing your notes?",
        created_at: new Date()
    },
    {
        from: "Morgan",
        to: "Taylor",
        msg: "I would appreciate your notes.",
        created_at: new Date()
    },
    {
        from: "Casey",
        to: "Jamie",
        msg: "Can you send me your lecture notes?",
        created_at: new Date()
    },
    {
        from: "Dakota",
        to: "Riley",
        msg: "Need your notes for reference.",
        created_at: new Date()
    },
    {
        from: "Alexis",
        to: "Cameron",
        msg: "May I get a copy of your notes?",
        created_at: new Date()
    }


]

Chat.insertMany(allChats);