const app = {
    // le div qui contient mon plateau
    boardDiv: document.getElementById('board'),
    // la position et la direction du joueur
    player: {
        x: 0,
        y: 0,
        direction: 'right'
    },
    // la cible a atteindre
    targetCell: {
        x: 5,
        y: 3
    },
    // une variable qui contient notre nombre de déplacements
    numberOfMoves: 0,
    // un boolen gameOver pour savoir si la partie est terminée
    gameOver: false,
    // une méthode pour savoir si on a gagné
    isGameOver: () => {
        // on a gagné, si le joueur est bien sur les coordonées de targetCell
        if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
            // ok, le joueur est sur la case d'arrivée

            // on le prévient, mais dans 100ms, le temps que la grille se redessine
            // parce que sinon alert "arrête" le Javascript
            setTimeout(() => {
                alert(`Gagné en ${app.numberOfMoves} coups`);
            }, 100);

            // et on met gameOver a true pour "bloquer" le jeu
            app.gameOver = true;
        }
    },
    turnLeft: () => {
        // si la partie est finie
        if (app.gameOver) {
            // je fais rien. 
            // donc je return
            // ce qui me permet de SORTIR de la fonction
            // et donc... de ne pas exécuter ce qui suit
            return;
        }
        // on augmente notre nombre de déplacements de 1
        app.numberOfMoves = app.numberOfMoves + 1;

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

        // on a tourné le joueur ? ok, on redessine
        app.redrawBoard();
    },
    turnRight: () => {
        // meme chose qu'au dessus
        if (app.gameOver) {
            return;
        }

        // on augmente notre nombre de déplacements de 1
        app.numberOfMoves = app.numberOfMoves + 1;

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

        // on a tourné le joueur ? ok, on redessine
        app.redrawBoard();
    },
    moveForward: () => {
        // meme chose qu'au dessus
        if (app.gameOver) {
            return;
        }
        // on augmente notre nombre de déplacements de 1
        app.numberOfMoves = app.numberOfMoves + 1;
        
        // faire avancer le joueur, ok, mais ca va dépendre de sa direction !
        // si je suis tourné vers le haut
        // je vérifie que je ne suis pas déja au bord
        // c'est a dire que y vaut plus de 0
        if (app.player.direction === 'up' && app.player.y > 0) {
            // j'enleve 1 a mon Y
            app.player.y = app.player.y - 1;
        }
        // si je suis tourné vers la droite
        // je vérifie que je ne suis pas déja au bord
        // c'est a dire que x vaut moins de 5
        else if (app.player.direction === 'right' && app.player.x < 5) {
            // j'ajoute 1 a mon X
            app.player.x = app.player.x + 1;
        }
        else if (app.player.direction === 'down' && app.player.y < 3) {
            // j'ajoute 1 a mon Y
            app.player.y = app.player.y + 1;
        }
        else if (app.player.direction === 'left' && app.player.x > 0) {
            // j'enleve 1 a mon X
            app.player.x = app.player.x - 1;
        }

        // pareil, on redessine
        app.redrawBoard();
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

        // ok la grille est dessinée, on regarde si le joueur a gagné
        app.isGameOver();
    },
    // vide le contenu de la div qui a l'id "board"
    clearBoard: () => {
        app.boardDiv.innerHTML = '';
    },
    redrawBoard: () => {
        app.clearBoard();

        app.drawBoard();
    },
    listenKeyboardEvents: () => {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowLeft') {
                app.turnLeft();
            }
            else if (event.key === 'ArrowRight') {
                app.turnRight();
            }
            else if (event.key === 'ArrowUp') {
                app.moveForward();
            }
        });
    },
    init: () => {
        app.listenKeyboardEvents();
        app.drawBoard();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
