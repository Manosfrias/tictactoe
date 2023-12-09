import { Board } from ".";

test('board exists', () => {
    const board = new Board();
    expect(board).toBeTruthy();
});