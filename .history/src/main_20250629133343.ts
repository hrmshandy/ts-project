import projects from './projects.json'

function renderProjectOptions() {
    console.log("projects:", projects)

    const selectProjectsEl = document.getElementById('projects')
    console.log(selectProjectsEl)

    projects.forEach(project => {
        const projectOption = document.createElement('option')

        projectOption.value = project.id.toString()
        projectOption.innerText = project.name

        selectProjectsEl?.append(projectOption)
    })

    // TODO: ketika select "Selected Project" nya terisi


}

renderProjectOptions()
