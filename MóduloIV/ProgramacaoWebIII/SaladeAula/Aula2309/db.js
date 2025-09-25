// conexao com banco de dados (moongo db)
import mongoose from "mongoose";

const conectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://isaquevieira2006_db_user:OT8pEoFH50DDMkrk@bdteste.3bwexqy.mongodb.net/ServidorAulaIII Writes=true&w=majority&appName=BDteste");
        console.log("Conectando ao MongoDB!")
    } catch (erro) {
        console.log(`Conexao com banco de dados falhou | erro: ${erro}`)
    }
}

export default conectDB;