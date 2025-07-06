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

function validateInputTask() {
    const inputTaskEl;

    inputTaskEl.addEventListener('input', (e: any) => {
        // validasi isi dari e.target.value hanya bisa menerima string,
        // jika memasukan angka maka akan muncul error "value is not valid"
    })
}

renderProjectOptions()
validateInputTask()
