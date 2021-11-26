const app = {
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
        for (let y = 0; y < 4; y++) {
            // je crée un div
            const row = document.createElement('div');

            // je lui met la classe "row"
            row.classList.add('row');

            // on l'insère dans le div "boardDiv" que j'ai stocké dans une propriété de mon objet
            app.boardDiv.appendChild(row);

            for (let x = 0; x < 6; x++) {
                // maintenant, dans cette row, on crée N cellules
                const cell = document.createElement('div');

                // je met la classe sur la cellule
                cell.classList.add('cell');

                // regardons si la cellule que l'on est en train de dessiner,
                // correspond a la case d'arrivée
                if (x === app.targetCell.x && y === app.targetCell.y) {
                    // si c'est la case d'arrivée, on lui rajoute la classe "targetCell"
                    cell.classList.add('targetCell');
                }
                // est ce que le joueur est sur la case que l'on dessine
                if (x === app.player.x && y === app.player.y) {
                    // si le joueur est dedans
                    // alors on crée un div
                    var playerDiv = document.createElement('div');
                    // on lui met la classe player
                    playerDiv.classList.add('player');
                    // et on l'insère dans la cellule
                    cell.appendChild(playerDiv);
                }

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