export enum ProjectStatus {
    active,
    pending
}

export interface IProject {
    id: number;
    name: string;
    status: ProjectStatus;
    manHour: number;
}
