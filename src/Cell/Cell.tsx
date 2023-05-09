import {getCompletedRow} from "../util.ts";

export class Cell {
    constructor(public possibleValues: number[] = getCompletedRow()) {}
    public values(): number[] {
        return this.possibleValues;
    }

    public isKnownCell(): boolean {
        return this.possibleValues.length === 1;
    }

    public getValue(): number|null {
        if (!this.isKnownCell()) {
            return null;
        }
        return this.possibleValues[0];
    }
}