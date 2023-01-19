import { User } from "../schemas/user.js";

async function incViews (name) {
    await User.updateOne( { name }, { $inc: { views: 1 } });
}

export { incViews }