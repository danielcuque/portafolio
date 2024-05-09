export interface IJob {
    title: string;
    link: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
}