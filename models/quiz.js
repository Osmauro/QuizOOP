import { Question } from "./question.js";

export class Quiz {
  questionindex = 0;
  score = 0;

  constructor(questions) {
    this.questions = questions;
  }

  //definiendo metodos
  /**
   *
   * @returns {Question}
   */
  getQuestionindex() {
    return this.questions[this.questionindex];
  }
  /**
   *
   * @param {string} answer recibe el texto de la respuesta
   */
  guess(answer) {
    if (this.getQuestionindex().Correctanswer(answer)) {
      this.score++;
    }
    this.questionindex++;
  }
  isEnd() {
    return this.questions.length === this.questionindex;
  }
}
