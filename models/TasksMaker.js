const { saveDB, readDB, exist_db } = require('../helpers/save_file');
const Task = require('./task');
require('colors');
class TaskMaker {

    constructor() {
        this._listado = {}; //un objeto
    }
    get listadoArr() {
        let listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });
        return listado;
    }
    update() {
        if (exist_db()) {
            this._listado = readDB();
        }
    }
    add_task(task) {
        this._listado[task.id] = task;

        saveDB(JSON.stringify(this.listadoArr));
    }

    all_tasks() {
        let indice = 0;
        console.log('Task To DO'.gray);

        this.listadoArr.forEach((task, indice) => {
            indice++;
            if (task.completadoEn != null) {
                console.log(`${indice}`.green + ` ${task.desc}` + ' ::' + '\tCompleted'.green);
            } else {
                console.log(`${indice}`.green + ` ${task.desc}` + ' ::' + 'Pending'.red);
            }
        });

    }
    filter_by_context(list, completed, message) {
        let tasks = [];
        if (completed) {
            tasks = list.filter(task => task.completadoEn != null);
        } else {
            tasks = list.filter(task => task.completadoEn == null);
        }

        if (tasks.length > 0) {
            console.log(`${message}`.grey);
            var date = '';
            tasks.forEach((task, indice) => {
                indice++;
                if (task.completadoEn != null)
                    date = ' :: ' + task.completadoEn;
                console.log(`${indice} `.green + task.desc + `${date}`.grey);
            });
        } else {
            console.log('No found tasks !!'.red);
        }
    }

    tasks_complete(complete = true) {
        this.filter_by_context(this.listadoArr, complete, 'Complete Tasks');
    }
    to_do_list(complete = false) {
        this.filter_by_context(this.listadoArr, complete, 'Pending Tasks');
    }
    delete(id) {
        console.log("deleting Task...".red);
        const data = this.listadoArr.filter(task => task.id != id);


        saveDB(JSON.stringify(data));
    }
    complete_task(_id) {
        const data = this.listadoArr;
        data.forEach(task => {
            if (task.id == _id) {

                task.completadoEn = new Date().toISOString();
                console.log(task);
            }
        })
        console.log(data);
        saveDB(JSON.stringify(data));
    }
    complete_tasks(ids) {

        ids.forEach(id => this.complete_task(id));
    }
}

module.exports = TaskMaker;