// modelo de um model

const mongoose=require('mongoose');

// definindo esquemas ou requerimentos para cada chave a ser construida no bd
const HomeSchema = new mongoose.Schema({
    titulo: String,
    subTitulo: { type: String, required: true}
});

const HomeModel= mongoose.model('Home', HomeSchema)

class Home{

}

module.exports=Home;