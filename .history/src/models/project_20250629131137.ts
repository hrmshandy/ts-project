import type { IProject, ProjectStatus } from "../interfaces";

class Project implements IProject {
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

export default Project
