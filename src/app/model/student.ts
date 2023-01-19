import { StatusBudzeta } from "../enum/status-budzeta";

export class Student {
    studentId: number;
    ime: string;
    prezime: string;
    brojIndeksa: string;
    godinaStudiranja: number;
    statusBudzeta: StatusBudzeta;
    aktivan: boolean;
}