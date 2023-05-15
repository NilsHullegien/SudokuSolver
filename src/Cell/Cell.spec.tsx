import {describe, expect, it} from "vitest";
import {Cell} from "./Cell.tsx";
import {getCompletedSetOfNine} from "../util.ts";

describe('Cell', () => {
    const defaultSet = getCompletedSetOfNine();
    it('creates a cell which contains the numbers 1-9 when no input is given', () => {
        const cell = new Cell();
        expect(cell.values()).to.deep.equal(defaultSet)
    })

    it('creates a cell with the given parameters', () => {
        const params = [1, 2];
        const cell = new Cell(params);
        expect(cell.values()).to.equal(params)
        expect(cell.isKnownCell()).to.be.false;
    });

    it('detects when it only contains one number', () => {
        const params = [1];
        const cell = new Cell(params);
        expect(cell.values()).to.equal(params)
        expect(cell.isKnownCell()).to.be.true;
    })

    it('returns the value if only a single value is possible', () => {
        const cell = new Cell([1]);
        expect(cell.getValue()).to.equal(1);
    })

    it('returns null when there are multiple possibilities', () => {
        const cell = new Cell([1, 2]);
        expect(cell.getValue()).to.be.null;
    })

    it('returns the string representation of a cell', () => {
        const cell = new Cell([1, 2]);
        expect(cell.toString()).to.equal('[1,2]');
    })
})