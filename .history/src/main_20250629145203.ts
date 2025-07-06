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
    // difinisikan tipe data yang sesuai
    let value;

    // definisikan tipe data yang sesuai
    const inputTaskEl;

    inputTaskEl.addEventListener('input', (e) => {
        // validasi isi dari e.target.value hanya bisa menerima string,
        // jika memasukan angka maka akan muncul error "value is not valid"

        // jika valuenya valid masukan ke variable "value"
    })
}

validateInputTask()
renderProjectOptions()
