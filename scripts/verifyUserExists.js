import { User } from "../schemas/user.js";

async function verifyUserExists (name) {
    let allUsers = await User.find(); // retorna todos os usuários
    let canSave = true;

    for (let nUser of allUsers) {
        if (nUser.name == name) {
            canSave = false;
            if(!canSave) throw ("**Usuário já existe"); 
        }
    } // verifica se o usuário já existe (por equivalência de nomes)
}

export { verifyUserExists }