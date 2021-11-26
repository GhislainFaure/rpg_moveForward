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
    turnLeft: () => {
        if (app.player.direction === 'up') {
            app.player.direction = 'left';
        }
        else if (app.player.direction === 'right') {
            app.player.direction = 'up';
        }
        else if (app.player.direction === 'down') {
            app.player.direction = 'right';
        }
        else if (app.player.direction === 'left') {
            app.player.direction = 'down';
        }
    },
    turnRight: () => {
        if (app.player.direction === 'up') {
            app.player.direction = 'right';
        }
        else if (app.player.direction === 'right') {
            app.player.direction = 'down';
        }
        else if (app.player.direction === 'down') {
            app.player.direction = 'left';
        }
        else if (app.player.direction === 'left') {
            app.player.direction = 'up';
        }
    },
    drawBoard: () => {
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
                    const playerDiv = document.createElement('div');
                    // on lui met la classe player
                    playerDiv.classList.add('player');
                    // et on l'insère dans la cellule

                    // lorsque on dessine le joueur, il faudrait le tourner dans le  bon sens
                    // j'ai déja préparé 4 classes : player--up, player--down, etc
                    // je n'ai plus qu'a construire le nom de cette classe depuis
                    // la propriété direction : `player--${app.player.direction}`
                    // et j'ajoute cette classe au joueur
                    playerDiv.classList.add(`player--${app.player.direction}`);

                    cell.appendChild(playerDiv);
                }

                // j'insère la cellule dans la ligne (row)
                row.appendChild(cell);
            }
        }
    },
    // vide le contenu de la div qui a l'id "board"
    clearBoard: () => {
        app.boardDiv.innerHTML = '';
    },
    redrawBoard: function() {
        app.clearBoard();

        app.drawBoard();
    },
    init: () => {
        console.log('init !');

        app.drawBoard();
    }
};

document.addEventListener('DOMContentLoaded', app.init);