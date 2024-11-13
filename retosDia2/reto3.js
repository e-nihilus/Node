const fs = require('fs/promises');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}


function persona() {
    
    const fileName = "person.json";
    const person = {};
    
    rl.question("Cuál es tu nombre? ")
    .then((names)=>{
         person.name = names;
        return rl.question("Cuál es tu apellido? ")
    })
    .then((surname)=>{
        person.surname = surname;
        return rl.question("Cuál es tu edad? ")
    })
    .then((age)=>{
        person.age = age;
        rl.close();
        return fs.writeFile(fileName, JSON.stringify(person))
    })

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
        rl.close();
    });
};
     

persona();
//------con Then/Catch--------



//-------con async/await--------

// async function person() {
//     try {
//         const name = await askQuestion("Cuál es tu nombre? ");
//         const surname = await askQuestion("Cuál es tu apellido? ");
//         const age = await askQuestion("Cuál es tu edad? ");
        
//         const person = { name, surname, age };
//         const fileName = "person.json";

//         await fs.writeFile(fileName, JSON.stringify(person)); 
//         const read = await fs.readFile(fileName, 'utf8'); 
//         console.log(read);

//         rl.close(); 
//     } catch (error) {
//         console.log("Ha habido un error");
//         console.log(error);
//     }
// }

// person();




