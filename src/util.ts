import {RawInputType, SetOfNineDigitsType} from "./types.ts";

export function getCompletedSetOfNine(): SetOfNineDigitsType {
    return Array.from({length: 9}, (_, i) => i + 1) as SetOfNineDigitsType;
}

export function getRandomRawInput(): RawInputType {
    return Array.from({length: 81}, () => Math.floor(Math.random() * 8) + 1) as RawInputType;
}