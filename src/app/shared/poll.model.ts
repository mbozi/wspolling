export class Poll {
    ID: number;
    PollsterID: number;
    Fieldwork: Date;
    CON: number;
    LAB: number;
    LDM: number;
    BRX: number;
    SNP: number;
    GRN: number;
    PLC: number;
    UKP: number;

    public constructor(init?:Partial<Poll>) {
        Object.assign(this, init);
    }
}

