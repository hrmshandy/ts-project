import projects from './projects.json'

function renderProjectOptions() {
    console.log("projects:", projects)

    const selectProjectsEl = document.getElementById('projects')
    console.log(selectProjectsEl)
}

renderProjectOptions()
