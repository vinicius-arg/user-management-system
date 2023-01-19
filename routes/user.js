import express from "express";
import { getUser } from "../scripts/getUser.js";
import { incViews } from "../scripts/incViews.js";

const router = express.Router();

router.get("/:user", async (req, res) => {
    let userName = req.params.user;
    let user = await getUser(userName);
    await incViews(userName);

    res.render("user", { user });
})

export { router as user }