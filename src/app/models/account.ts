import { Phone } from './phone';

export class Account {
    public id: number;
    public name: string;
    public email: string;
    public isEmployee: boolean;
    public departmentId: number;
    public phoneNumbers: Phone[];

    constructor() {
        this.name = null;
        this.email = null;
        this.isEmployee = false;
        this.phoneNumbers = [];
    }
}
