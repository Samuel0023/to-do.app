const fs = require('fs');

const saveDB = (data) => {

    const archivo = './db/data.json';

    fs.writeFileSync(archivo, data);

}

module.exports = { saveDB };