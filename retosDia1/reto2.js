
const fs = require('fs');

const person = {"name": "Pepe", "surname": "Garcia", "age": 30};
const fileName = "person.json";

if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
}

fs.writeFile(fileName, JSON.stringify(person, null, 2), (error) => {
    if (error) {
        console.error("No se ha podido guardar el fichero");
        return;
    }

    console.log("Archivo guardado");

    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("No se ha podido leer el fichero");
            return;
        }

        const readArch = JSON.parse(data);
        console.log(readArch);
    });
});
