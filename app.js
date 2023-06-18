import { newquestions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.JS";

/**
 *
 * @param {Quiz} quiz Quiz object
 * @param {UI} ui UI
 */
function renderpage(quiz, ui) {
  if (quiz.isEnd()) {
    ui.Showscore(quiz.score);
  } else {
    ui.showProgress(quiz.getQuestionindex().length);
    ui.showQuestion(quiz.getQuestionindex().question);
    ui.showChoices(quiz.getQuestionindex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderpage(quiz, ui);
    });
    ui.showProgress(quiz.questionindex +1, quiz.questions.length);
  }
}

function main() {
  const quiz = new Quiz(newquestions);
  const ui = new UI();
  renderpage(quiz, ui);
}

main();
