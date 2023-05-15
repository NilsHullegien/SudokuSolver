import {describe, expect, it} from "vitest";
import {Board} from "./Board.tsx";
import {getRandomRawInput} from "../util.ts";

describe('Board', () => {
    it('Parses the board when a comma separated list with the correct specs is given', () => {
        const input = getRandomRawInput();
        const board = Board.from(input);
        expect(board).to.exist;
    });
})