const menu = () => {

    return new Promise((resolve, reject) => {
        console.clear();
        console.log(' ============================ '.green);
        console.log('   Select An Option '.green);
        console.log(' ============================ '.green);

        console.log(`${'1.'.green} Add task`);
        console.log(`${'2.'.green} List Tasks`);
        console.log(`${'3.'.green} List Completed Tasks `);
        console.log(`${'4.'.green} TO-DO List`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete Task`);
        console.log(`${'0.'.green} Leave \n`);

        let readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Selecciona  option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    })
};

const pause = () => {
    return new Promise((resolve, reject) => {
        let readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`Presione ${'Enter'.green} para continuar `, (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

module.exports = { menu, pause }