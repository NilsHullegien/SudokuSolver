import {Cell} from "../Cell/Cell.tsx";
import {getCompletedRow} from "../util.ts";

export type RowPropType = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export class Row {
    constructor(public cells: RowPropType) {}

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
            .every((val, idx) => val === getCompletedRow()[idx]);
    }
}
