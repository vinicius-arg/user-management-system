import mongoose from "mongoose";

const url = "mongodb://localhost/ums";

async function mongoConnect (authSource, user, pass) {
    try {
        await mongoose.connect(url, {
            authSource, user, pass
        });
        console.log("Sucessfully connected to database.");
    } catch (err) {
        console.log(err);
    }   
}

export { mongoConnect }