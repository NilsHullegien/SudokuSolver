import {BoardType, RawInputType} from "../types.ts";
import {Cell} from "../Cell/Cell.tsx";
import {emptyCellChar} from "../config.ts";

export class Board {
    constructor(private board: BoardType) {}
    static from(input: RawInputType) {
        const board = [];
        for (const cell in input) {
            if (cell === emptyCellChar) {
                board.push(new Cell())
            } else {
                board.push(new Cell([+cell]));
            }
        }
        return new Board(board as BoardType);
    }


}