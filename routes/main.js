import express from "express";
import { verifyUserExists } from "../scripts/verifyUserExists.js";
import { toCapitalize } from "../scripts/toCapitalize.js";
import { User } from "../schemas/user.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.render("search");
});

router.get("/create", (req, res) => {
    res.render("create", { message: { msg: "", status: null } });
});

router.post("/create", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pwd = req.body.pwd;

    try {
        await verifyUserExists(name);

        let user = new User({
            name, pwd, email, views: 0
        });

        user.save()
            .then(() => {
                res.render("create", { message: {msg: "Usuário criado", sucess: true } });
            })
           
    } catch (err) {
        res.render("create", { message: { msg: err, sucess: false } } );
    }
});

router.get("/search", async (req, res) => {
    let name = toCapitalize(req.query.name);
    
    let users = await User.find({ name: { $regex: name }});
    res.render("match", { users, search: name });
});

export { router as main }