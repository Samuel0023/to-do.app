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
        })
        return listado;
    }

    add_task(task) {
        this._listado[task.id] = task;
    }

    to_do_list() {
        console.log('Task To DO'.gray);

        this.listadoArr.forEach(task => {
            console.log(`${task.desc}`.blue);
        })
    }
    tasks_complete() {
        let task_complete = this.listadoArr.filter(task => {
            task.completadoEn != null
        });
        if (task_complete.length === 0) {
            console.log('\tNo task completed'.red);
        } else {

            this.listadoArr.forEach(task => {
                console.log(`${task.desc}`.green);
            })
        }
    }
    complete_task(task) {
        
    }
}

module.exports = TaskMaker;