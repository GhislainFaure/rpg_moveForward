const app = {
  boardDiv: document.getElementById("board"),
  player: {
    x: 0,
    y: 0,
    direction: "right",
  },
  targetCell: {
    x: 5,
    y: 3,
  },
  numberOfMoves: 0,
  gameOver: false,
  isGameOver: () => {
    if (
      app.player.x === app.targetCell.x &&
      app.player.y === app.targetCell.y
    ) {
      setTimeout(() => {
        alert(`wesh gros batard tu as gagné en ${app.numberOfMoves} coups`);
      }, 200);
      setTimeout(() => {
        app.player.x = 0;
        app.player.y = 0;
        app.player.direction = "right";
        app.redrawBoard();
      }, 300);
      app.gameOver = true;
    }
  },
  drawBoard: function () {
    for (let y = 0; y < 4; y++) {
      const row = document.createElement("div");
      row.classList.add("row");
      app.boardDiv.append(row);

      for (let x = 0; x < 6; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (x === app.targetCell.x && y === app.targetCell.y) {
          cell.classList.add("target");
        }
        if (x === app.player.x && y === app.player.y) {
          let playerDiv = document.createElement("div");
          playerDiv.classList.add("player");
          playerDiv.classList.add(`player--${app.player.direction}`);

          cell.append(playerDiv);
        }
        row.append(cell);
      }
    }
    app.isGameOver();
  },
  clearBoard: function () {
    app.boardDiv.innerHTML = "";
  },
  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  },
  turnLeft: function () {
    if (app.gameOver) {
      return;
    }
    if (app.player.direction === "up") {
      app.player.direction = "left";
    } else if (app.player.direction === "right") {
      app.player.direction = "up";
    } else if (app.player.direction === "down") {
      app.player.direction = "right";
    } else if (app.player.direction === "left") {
      app.player.direction = "down";
    }
    app.redrawBoard();
  },
  turnRight: function () {
    if (app.gameOver) {
      return;
    }
    if (app.player.direction === "up") {
      app.player.direction = "right";
    } else if (app.player.direction === "right") {
      app.player.direction = "down";
    } else if (app.player.direction === "down") {
      app.player.direction = "left";
    } else if (app.player.direction === "left") {
      app.player.direction = "up";
    }
    app.redrawBoard();
  },
  moveForward: function () {
    if (app.gameOver) {
      return;
    }
    if (app.player.direction === "up" && app.player.y > 0) {
      app.player.y = app.player.y - 1;
    } else if (app.player.direction === "left" && app.player.x > 0) {
      app.player.x = app.player.x - 1;
    } else if (app.player.direction === "right" && app.player.x < 5) {
      app.player.x = app.player.x + 1;
    } else if (app.player.direction === "down" && app.player.y < 3) {
      app.player.y = app.player.y + 1;
    }
    app.redrawBoard();
  },

  init: function () {
    app.drawBoard();
    app.listenKeyboardEvents();
  },
  listenKeyboardEvents: () => {
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") {
        app.turnRight();
      } else if (event.key === "ArrowLeft") {
        app.turnLeft();
      } else if (event.key === "ArrowUp") {
        app.numberOfMoves++;
        app.moveForward();
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
