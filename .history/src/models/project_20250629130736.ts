import type { IProject } from "../interfaces";

class Project implements IProject {
    public id: number;
    public name: string;
    public status: string;
    public manHour: number;

    constructor(data: IProject) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.manHour = data.manHour;
    }
}
