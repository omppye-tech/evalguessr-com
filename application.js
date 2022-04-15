/* Bootstrap */

const slider = document.getElementById("slider");
const submit = document.getElementById("submit");
const position = document.getElementById("next-position");
const container = document.getElementById("answer-container");
const answer = document.getElementById("answer");
const sliderGuess = document.getElementById("slider-guess");

/* Functions */

const getRandomGame = () => {
  const game =
    window.__games[Math.floor(Math.random() * window.__games.length)];

  if (window.__already_played.includes(game.fen)) {
    return getRandomGame();
  }

  window.__already_played.push(game.fen);

  return game;
};

const getImageBoard = (fen) => {
  if (!fen) {
    return "https://corsanywhere.herokuapp.com/http://www.fen-to-image.com/image/64/rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR.png";
  }

  return (
    "https://corsanywhere.herokuapp.com/http://www.fen-to-image.com/image/64/" +
    fen +
    ".png"
  );
};

const beginPosition = () => {
  window.__current_game = getRandomGame();

  document
    .getElementById("chess-board")
    .setAttribute("src", getImageBoard(window.__current_game.fen));
  return;
};

beginPosition();

/* Event listeners */

slider.addEventListener("input", (event) => {
  sliderGuess.innerText = event.target.value;
  return;
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("answer").innerText = window.__current_game.score;

  slider.disabled = true;
  submit.disabled = true;
  position.disabled = false;
  position.style.display = "inline-block";
  container.style.display = "block";

  return;
});

position.addEventListener("click", (event) => {
  event.preventDefault();

  slider.disabled = false;
  slider.value = 0;
  submit.disabled = false;
  position.disabled = true;
  position.style.display = "none";
  container.style.display = "none";
  sliderGuess.innerText = 0;

  return beginPosition();
});
