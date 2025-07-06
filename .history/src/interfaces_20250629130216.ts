export enum ProjectStatus {
    active,
    pending
}

export interface IProject {
    name: string;
    status: ProjectStatus;
    manHour: number;
}
