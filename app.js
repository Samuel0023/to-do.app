const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Task = require('./models/task');
const TaskMaker = require('./models/TasksMaker');
require('colors');

const gestor = new TaskMaker();

let actions = async(opt) => {
    switch (opt) {
        case '1':
            let desc = await readInput('Description: ');
            gestor.add_task(new Task(desc));

            //gestor.to_do_list();
            break;
        case '2':
            gestor.to_do_list();
            break;
        case '3':
            gestor.tasks_complete();
            break;
        default:
            break;
    }
}

const main = async() => {
    //connect();


    let opt = '';
    do {
        opt = await inquirerMenu();
        await actions(opt);
        console.log('\n');
        await pause();
    } while (opt != '0');

}

main();