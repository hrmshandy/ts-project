import type { IProject } from "../interfaces";

class Project implements IProject {
    public id: number;
    public name: string;
    public status: string;
    public manHour: number;
}
