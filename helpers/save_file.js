const fs = require('fs');
const archivo = './db/data.json';

const saveDB = (data) => {


    fs.writeFileSync(archivo, data);

}
const readDB = () => {
    if (fs.existsSync(archivo)) {
        const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
        return JSON.parse(info);
    } else {
        return false;
    }
}
module.exports = { saveDB, readDB };