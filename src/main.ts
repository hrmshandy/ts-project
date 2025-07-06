import { ProjectCollection } from './models/project'

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
