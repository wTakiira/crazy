import Grid from './components/grid.js';
import { Board } from '.models/board.js';
// Main
window. addEventListener('load', () => {
const grid = new Grid(document.getElementById("grid"));
const board = new Board();
grid.render(board);
});