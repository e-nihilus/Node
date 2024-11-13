const fs = require('fs/promises');
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

//------con Then/Catch--------

rl.question("Cuál es tu nombre? ", (name) => {
    rl.question("Cuál es tu apellido? ", (surname) => {
        rl.question("Cuál es tu edad? ", (age) => {

            const person = { name, surname, age };
            const fileName = "person.json";

            fs.writeFile(fileName, JSON.stringify(person))
            .then(() => {
                console.log("Archivo guardado");
                return fs.readFile(fileName, 'utf8');
            })
            .then((dato) => {
                console.log("El fichero se ha leído correctamente");
                console.log(dato);
            })
            .catch((error) => {
                console.log("Ha habido un error");
                console.log(error);
            });
            rl.close();
        });
    });
});

//-------con async/await--------

async function person() {
    try {
        const name = await askQuestion("Cuál es tu nombre? ");
        const surname = await askQuestion("Cuál es tu apellido? ");
        const age = await askQuestion("Cuál es tu edad? ");
        
        const person = { name, surname, age };
        const fileName = "person.json";

        await fs.writeFile(fileName, JSON.stringify(person)); 
        const read = await fs.readFile(fileName, 'utf8'); 
        console.log(read);

        rl.close(); 
    } catch (error) {
        console.log("Ha habido un error");
        console.log(error);
    }
}

person();


