export function getCompletedRow(): number[] {
    return Array.from({length: 9}, (_, i) => i + 1)
}