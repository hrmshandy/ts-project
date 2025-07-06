export enum ProjectStatus {
    active,
    pending
}

export interface IProject {
    name: string;
    status: string;
    manHour: number;
}
