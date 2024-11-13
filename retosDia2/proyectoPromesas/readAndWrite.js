const fs = require('fs/promises');

//------con Then/Catch--------

// function writeAndRead(path, obj) {
//     fs.writeFile(path, JSON.stringify(obj))
//     .then(()=>{
//         console.log("Archivo guardado");
//         return fs.readFile(path, 'utf8');
//     })
//     .then((dato)=>{
//         console.log("El fichero se ha leido correctamente");
//         console.log(dato);
//     })
//     .catch((error)=>{
//         console.log("ha habido un error");
//         console.log(error);
//     });
// }

//-------con async/await--------

async function writeAndRead(path, obj){
    try{
        await fs.writeFile(path, JSON.stringify(obj))
        const read = await fs.readFile(path, 'utf8')
        console.log(read)
    }
    catch(error){
        console.log("ha habido un error");
        console.log(error);
    }   
}

module.exports = writeAndRead;