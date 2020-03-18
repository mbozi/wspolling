export class Pollster {
    ID: number;
    pName: string;

    public constructor(init?:Partial<Pollster>) {
        Object.assign(this, init);
    }
}


