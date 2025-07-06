import projects from './projects.json'

function renderProjectOptions() {
    console.log("projects:", projects)

    const selectedProjectEl = document.getElementById('selectedProject')
    const selectProjectsEl = document.getElementById('projects')



    selectProjectsEl?.addEventListener('change', (e: any) => {
        const value = projects.find(pr => pr.id == e.target.value)

        if (selectedProjectEl)
            selectedProjectEl.innerText = value?.name || ''
    })
}

renderProjectOptions()
