class Question {
  /**
   *
   * @param {string} text  la pregunta
   * @param {string[]} choices  lista de opciones
   * @param {string} answer respuesta
   * @param {string} category  categoria pregunta
   * @param {int} level nivel de la categoria
   * @param {string} id id de la categoria
   */
  constructor(text, choices, answer, category, level, id) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.category = category;
    this.level = level;
    this.id = id;
  }

  /**
   *
   * @param {string} choice opcion seleccionada
   * @returns {boolean} si es correcta
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
 
}

export { Question };
