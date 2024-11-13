
const fs = require('fs/promises');

const person = {"name": "Pepe", "surname": "Garcia", "age": 30};
const fileName = "person.json";

//------con Then/Catch--------

fs.writeFile(fileName, JSON.stringify(person))
.then(()=>{
    console.log("Archivo guardado");
    return fs.readFile(fileName, 'utf8');
})
.then((dato)=>{
    console.log("El fichero se ha leido correctamente");
    console.log(dato);
})
.catch((error)=>{
    console.log("ha habido un error");
    console.log(error);
});

//-------con async/await--------

async function writeAndRead() {
    try{
        await fs.writeFile(fileName, JSON.stringify(person))
        const read = await fs.readFile(fileName, 'utf8')
        console.log(read)
    }
    catch(error){
        console.log("ha habido un error");
        console.log(error);
    }
}

writeAndRead()