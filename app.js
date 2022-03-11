const { inquirerMenu, pause, readInput, taskToDelete, confirm } = require('./helpers/inquirer');
const Task = require('./models/task');
const TaskMaker = require('./models/TasksMaker');
require('colors');

const gestor = new TaskMaker();

let actions = async(opt) => {
    gestor.update();
    switch (opt) {
        case '1':
            let desc = await readInput('Description: ');
            gestor.add_task(new Task(desc));
            break;
        case '2':
            gestor.all_tasks();
            break;
        case '3':
            gestor.tasks_complete();
            break;
        case '4':
            gestor.to_do_list();
            break;
        case '6':
            let id = await taskToDelete(gestor.listadoArr);
            if (await confirm(" Are u sure?")) {
                gestor.delete(id);
            }
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