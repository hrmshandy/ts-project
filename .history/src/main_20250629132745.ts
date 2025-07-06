import projects from './projects.json'

function renderProjectOptions() {
    console.log("projects:", projects)

    const selectProjectsEl = document.getElementById('projects')
    console.log(selectProjectsEl)

    projects.forEach(project => {
        const projectOption = document.createElement('option')

        projectOption.value = project.id.toString()
        peojectOption.innerText = project.name
        selectProjectsEl?.append
    })
}

renderProjectOptions()
