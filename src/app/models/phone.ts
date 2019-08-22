export class Phone {
    public number: string;

    constructor(num: string, public type: PhoneType) {
        this.number = num;
    }
}

export enum PhoneType {
    Home = 1,
    Mobile,
    Office,
}
