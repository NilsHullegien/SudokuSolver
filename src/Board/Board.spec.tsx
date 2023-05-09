import {describe, expect, it} from "vitest";
import {Board} from "./Board.tsx";

describe('Board', () => {
    it('Starts with an empty board', () => {
        const board = new Board();
        expect(board).to.exist;
    });
})