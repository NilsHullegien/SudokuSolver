import {describe, expect, it} from "vitest";
import {Row, RowPropType} from "./Row.tsx";
import {Cell} from "../Cell/Cell.tsx";

function getDefaultRow(): RowPropType {
    return [new Cell(), new Cell(), new Cell(), new Cell(), new Cell(), new Cell(), new Cell(), new Cell(), new Cell()];
}

function getCompletedRow(): RowPropType {
    return [new Cell([1]), new Cell([2]), new Cell([3]),
        new Cell([4]), new Cell([5]), new Cell([6]),
        new Cell([7]), new Cell([8]), new Cell([9])];
}

describe('Row', () => {
    it('should contain 9 cells', () => {
        const defaultRow = getDefaultRow();
        const row = new Row(defaultRow);
        expect(row.values()).to.deep.equal(defaultRow);
    });

    it('detects if not all cells are resolved', () => {
        const row = new Row(getDefaultRow());
        expect(row.areAllCellsResolved()).to.be.false;
    })

    it('detects if all cells are resolved', () => {
        const row = new Row(getCompletedRow());
        expect(row.areAllCellsResolved()).to.be.true;
    })

    it('detects if the row is not solved', () => {
        const row = new Row(getDefaultRow());
        expect(row.isSolved()).to.be.false;
    })

    it('detects if the row is solved', () => {
        const row = new Row(getCompletedRow());
        expect(row.isSolved()).to.be.true;
    })

    it('returns the string representation of a row', () => {
        const completedRow = new Row(getCompletedRow());
        expect(completedRow.toString()).to.equal('["[1]","[2]","[3]","[4]","[5]","[6]","[7]","[8]","[9]"]');

        const defaultRow = new Row(getDefaultRow());
        expect(defaultRow.toString()).to.equal(
            '["[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]",' +
            '"[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]",' +
            '"[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]"]');
    })
});
