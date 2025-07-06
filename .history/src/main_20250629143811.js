import { ProjectCollection } from './models/project';

function renderProjectOptions() {
    const selectedProjectEl = document.getElementById('selectedProject');
    const selectProjectsEl = document.getElementById('projects');
    const collection = new ProjectCollection();
    collection.renderAsSelectOptions(selectProjectsEl);
    selectProjectsEl?.addEventListener('change', (e) => {
        const value = collection.findProjectById(e.target.value);
        if (selectedProjectEl)
            selectedProjectEl.innerText = value?.name || '';
    });
}
renderProjectOptions();
