/* Bootstrap */

const slider = document.getElementById("slider");
const submit = document.getElementById("submit");
const nextPosition = document.getElementById("next-position");
const answerHeader = document.getElementById("answer-header");
const answerAnchor = document.getElementById("answer-anchor");
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

  document.getElementById("turn").innerText = window.__current_game.fen
    .split(" ")
    .filter((char) => ["b", "w"].includes(char))
    .map((char) => (char === "b" ? "Black" : "White"));

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

  answerAnchor.setAttribute("href", window.__current_game.lichess);
  answer.innerText = window.__current_game.score;

  slider.disabled = true;
  submit.disabled = true;
  nextPosition.disabled = false;
  nextPosition.style.display = "inline-block";
  answerHeader.style.display = "block";

  return;
});

nextPosition.addEventListener("click", (event) => {
  event.preventDefault();

  answerAnchor.setAttribute("href", "#");
  answer.innerText = "0.0";

  slider.disabled = false;
  slider.value = 0;
  submit.disabled = false;
  nextPosition.disabled = true;
  nextPosition.style.display = "none";
  answerHeader.style.display = "none";
  sliderGuess.innerText = 0;

  return beginPosition();
});
