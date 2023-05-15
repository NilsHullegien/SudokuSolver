import {getCompletedSetOfNine} from "../util.ts";

export class Cell {
    constructor(private possibleValues: number[] = getCompletedSetOfNine()) {}
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

    public toString(): string {
        return JSON.stringify(this.possibleValues);
    }

}