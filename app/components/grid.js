export const SIZE = 4;

export default function render_grid(grid) {
  for (let row = 0; row < SIZE; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < SIZE; col++) {
      // Ajout d'une cellule
      const td = document.createElement("td");
      tr.append(td);
    }
    // Ajout d'une Ligne
    grid.append(tr);
  }
}
