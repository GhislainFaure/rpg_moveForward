var app = {
    // le div qui contient mon plateau
    boardDiv: document.getElementById('board'),
    player: {
        x: 0,
        y: 0,
        direction: 'right'
    },
    targetCell: {
        x: 5,
        y: 3
    },
    drawBoard: function () {
        // de 0 a 4...
        for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
            // je crée un div
            var row = document.createElement('div');

            // je lui met la classe "row"
            row.classList.add('row');

            // on l'insère dans le div "boardDiv" que j'ai stocké dans une propriété de mon objet
            app.boardDiv.appendChild(row);

            for (var cellIndex = 0; cellIndex < 6; cellIndex++) {
                // maintenant, dans cette row, on crée N cellules
                var cell = document.createElement('div');

                // je met la classe sur la cellule
                cell.classList.add('cell');

                // j'insère la cellule dans la ligne (row)
                row.appendChild(cell);
            }
        }
    },
    init: function () {
        console.log('init !');

        app.drawBoard();
    }
};

document.addEventListener('DOMContentLoaded', app.init);