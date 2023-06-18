export class UI {
  constructor() {}
  /**
   *
   * @param text pregunta a mostrar
   */
  showQuestion(text) {
    const questiontittle = document.getElementById("question");
    questiontittle.innerHTML = text;
  }
  /**
   *
   * @param {string[]} choices choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("Choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      choicesContainer.append(button);
      button.addEventListener("click", () => callback(choices[i]));
    }
  }
  /**
   *
   * @param {number} score total score
   */
  Showscore(score) {
    const quizendHTML = `
    <h1>Results</h1>
    <h2>Your Score is: ${score}</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizendHTML;
  }
  showProgress(currentindex, total) {
    const progress = document.getElementById("progress");
    progress.innerHTML = `Pregunta ${currentindex} de ${total} `;
  }
}
