import projects from '../projects.json'
import type { IProject, ProjectStatus } from "../interfaces";

export class Project implements IProject {
    public id: number;
    public name: string;
    public status: ProjectStatus;
    public manHour: number;

    constructor(data: IProject) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.manHour = data.manHour;
    }
}

export class ProjectCollection {
    renderAsSelectOptions(selectEl: HTMLSelectElement) {
        projects.forEach((project: IProject) => {
            const projectOption = document.createElement('option')

            projectOption.value = project.id.toString()
            projectOption.innerText = project.name

            selectEl?.append(projectOption)
        })
    }

    findProjectById(id: number | string) {
       return projects.find(pr => pr.id == id)
    }
}
