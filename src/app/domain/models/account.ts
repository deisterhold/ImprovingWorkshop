import { Phone } from './phone';

export class Account {
    public id: number;
    public name: string;
    public email: string;
    public isEmployee: boolean;
    public departmentId: number;
    public phoneNumbers: Phone[];
}
