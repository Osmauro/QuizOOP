export class Question {
  /**
   *
   * @param {string} question estas son las preguntas
   * @param {string[]} choices arreglo de opciones
   * @param {string} answer esta es la respuesta que es un string
   */
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} choice recibe un texto
   * @returns {Boolean} retorna true si es correcto
   */
  Correctanswer(choice) {
    return choice === this.answer;
  }
}