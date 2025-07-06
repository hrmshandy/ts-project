import projects from './projects.json'

function renderProjectOptions() {
    console.log("projects:", projects)

    const selectedProjectEl = document.getElementById('selectedProject')
    const selectProjectsEl = document.getElementById('projects')
    console.log(selectProjectsEl)

    projects.forEach(project => {
        const projectOption = document.createElement('option')

        projectOption.value = project.name
        projectOption.innerText = project.name

        selectProjectsEl?.append(projectOption)
    })

    // TODO: ketika select "Selected Project" nya terisi

    selectProjectsEl.addEventListener('change', (e: any) => {
        console.log("on change the value is:", e.target.value)

    })
}

renderProjectOptions()
