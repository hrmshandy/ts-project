export enum ProjectStatus {
    active,
    pending
}

export interface IProject {
    name: string;
    status: "active" | "pending"; //ProjectStatus;
    manHour: number;
}
