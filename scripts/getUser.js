import { User } from "../schemas/user.js";

async function getUser (name) {
    return await User.findOne({ name });
}

export { getUser }