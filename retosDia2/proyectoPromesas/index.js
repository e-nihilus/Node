const readConsole = require('./readConsole')
const writeAndRead = require('./readAndWrite')


//------con Then/Catch--------
readConsole()
    .then((userData) => {
        return writeAndRead("./ejem.json", userData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//-------con async/await--------

// async function persona() {
//     try {
//         const userData = await readConsole();
//         const result = writeAndRead("./ejem.json", userData);
//         return result
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// persona();