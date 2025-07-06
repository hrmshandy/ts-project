import { ProjectCollection } from './models/project'
import { SimpleTask } from './models/task'

function renderProjectOptions() {
    const selectedProjectEl = document.getElementById('selectedProject')
    const selectProjectsEl = document.getElementById('projects')

    const collection = new ProjectCollection()

    collection.renderAsSelectOptions(selectProjectsEl as HTMLSelectElement)

    selectProjectsEl?.addEventListener('change', (e: any) => {
        const value = collection.findProjectById(e.target.value)

        if (selectedProjectEl)
            selectedProjectEl.innerText = value?.name || ''
    })
}


renderProjectOptions()

const task = new SimpleTask(1)

console.log('task', task)
console.log("create task", task.create("buat fitur crud task"))
console.log('get all tasks', task.getAll())
console.log('find by id', task.findById('123456789'))
console.log("update task", task.update("123456789", "updated task"))
console.log("get all updated task", task.getAll())
console.log("delete task", task.delete("123456789"))
console.log("get all deleted task", task.getAll())


const project = new Project();

// project.create("project name")
// project.getAll()
// project.findById("123456")
// project.update("123456", "update project name")
// project.delete("123456")
