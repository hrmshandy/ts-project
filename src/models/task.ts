import { generateId } from "../utilities"

interface ITask {
    id: string;
    task: string;
    newProperty?: string
}

// TODO: refactor abstract class berikut kedalam file terpisah, kemudian implement di project
abstract class Task {
    protected projectId: number;
    protected _tasks: ITask[]; // [{ id: '12124123412', task: 'example task'}]

    constructor(projectId: number) {
        this.projectId = projectId
        this._tasks = [
            { id: '123456789', task: 'example task'}
        ];
    }

    public first() {
        return this._tasks[0]
    }

    public last() {
        return this._tasks[this._tasks.length - 1]
    }

    public findById(id: string) {
        // let result;

        // for (let i = 0; i < this._tasks.length; i++) {
        //     if (id === this._tasks[i].id) {
        //         result = this._tasks[i]
        //     }
        // }

        // return result;

        return this._tasks.find(task => task.id === id)
    }

    public getAll() {
        return this._tasks;
    }

    public delete(taskId: string) {
        const taskIndex = this._tasks.findIndex(task => task.id === taskId)

        return this._tasks.splice(taskIndex, 1)
    }
}

export class SimpleTask extends Task {
    public create(task: string) {
        const newTask = {
            id: generateId(),
            task
        }

        // add item to array with push
        this._tasks.push(newTask)

        return newTask
    }

    public update(taskId: string, task: string) {
        const currentTask = this.findById(taskId);

        if (currentTask) {
            currentTask.task = task;

            return currentTask
        }

        throw Error("task not found")
    }
}
