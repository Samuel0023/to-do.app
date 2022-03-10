const inquirer = require('inquirer');
require('colors');

const menuOpt = [{
    type: 'list',
    name: 'option',
    message: 'What you want to do? ',
    choices: [{
            value: '1',
            name: `${'1.'.green} Add Task`
        },
        {
            value: '2',
            name: `${'2.'.green} List Task`
        },
        {
            value: '3',
            name: `${'3.'.green} List Complete Tasks`

        },
        {
            value: '4',
            name: `${'4.'.green} TO-DO List`

        },
        {
            value: '5',
            name: `${'5.'.green} Complete Task(s)`

        },
        {
            value: '6',
            name: `${'6.'.green} Delete Tasks`
        },
        {
            value: '0',
            name: `${'0.'.green} Leave`

        }

    ]
}]
const inquirerMenu = async() => {
    console.clear();
    console.log(' ============================ '.green);
    console.log('   Select An Option '.white);
    console.log(' ============================ '.green);

    const { option } = await inquirer.prompt(menuOpt);
    return option;
}


const pause = async() => {
    const { pausa } = await inquirer.prompt([{

        type: 'input',
        name: 'pausa',
        message: `Presione ${'Enter'.green} para continuar`

    }])
    console.log('\n');
    return pausa;

};

const readInput = async(message) => {
    const question = [{
        type: 'intput',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Please enter a value';
            }
            return true;
        }
    }]
    const { desc } = await inquirer.prompt(question);
    return desc;
}
module.exports = {
    inquirerMenu,
    pause,
    readInput
}