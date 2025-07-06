import { ProjectCollection } from './models/project'
import TodoApp from './models/ex-default'
import { A, B } from './models/ex-multi'

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
