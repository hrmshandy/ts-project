export enum ProjectStatus {
    Active,
    Pending
}

export interface IProject {
    name: string;
    status: string;
    manHour: number;
}
