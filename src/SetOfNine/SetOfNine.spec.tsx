import {describe, expect, it} from "vitest";
import {SetOfNine} from "./SetOfNine.tsx";
import {Cell} from "../Cell/Cell.tsx";
import {SetOfNineCellType} from "../types.ts";

function getDefaultSetOfNine(): SetOfNineCellType {
    return Array.from({length: 9}, () => new Cell()) as SetOfNineCellType;
}

function getCompletedSetOfNine(): SetOfNineCellType {
    return [new Cell([1]), new Cell([2]), new Cell([3]),
        new Cell([4]), new Cell([5]), new Cell([6]),
        new Cell([7]), new Cell([8]), new Cell([9])];
}

describe('SetOfNine', () => {
    it('should contain 9 cells', () => {
        const defaultSetOfNine = getDefaultSetOfNine();
        const setOfNine = new SetOfNine(defaultSetOfNine);
        expect(setOfNine.values()).to.deep.equal(defaultSetOfNine);
    });

    it('detects if not all cells are resolved', () => {
        const setOfNine = new SetOfNine(getDefaultSetOfNine());
        expect(setOfNine.areAllCellsResolved()).to.be.false;
    })

    it('detects if all cells are resolved', () => {
        const setOfNine = new SetOfNine(getCompletedSetOfNine());
        expect(setOfNine.areAllCellsResolved()).to.be.true;
    })

    it('detects if the set of nine is not solved', () => {
        const setOfNine = new SetOfNine(getDefaultSetOfNine());
        expect(setOfNine.isSolved()).to.be.false;
    })

    it('detects if the set of nine is solved', () => {
        const setOfNine = new SetOfNine(getCompletedSetOfNine());
        expect(setOfNine.isSolved()).to.be.true;
    })

    it('returns the string representation of a set of nine', () => {
        const completedSetOfNine = new SetOfNine(getCompletedSetOfNine());
        expect(completedSetOfNine.toString()).to.equal('["[1]","[2]","[3]","[4]","[5]","[6]","[7]","[8]","[9]"]');

        const defaultSetOfNine = new SetOfNine(getDefaultSetOfNine());
        expect(defaultSetOfNine.toString()).to.equal(
            '["[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]",' +
            '"[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]",' +
            '"[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]","[1,2,3,4,5,6,7,8,9]"]');
    })
});
