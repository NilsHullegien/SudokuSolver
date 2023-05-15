import {getCompletedSetOfNine} from "../util.ts";
import {SetOfNineCellType} from "../types.ts";

export class SetOfNine {
    constructor(public cells: SetOfNineCellType) {}


    public values() {
        return this.cells;
    }

    public areAllCellsResolved(): boolean {
        return this.cells.filter((el) => el.isKnownCell()).length === 9
    }

    public isSolved(): boolean {
        if (!this.areAllCellsResolved()) {
            return false;
        }

        return this.cells.map(cell => cell.getValue())
            .every((val, idx) => val === getCompletedSetOfNine()[idx]);
    }

    public toString(): string {
        return JSON.stringify(this.cells.map(el => el.toString()));
    }
}
