
//PREGUNTAS
import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  questionIndex = 0;
  final = false
 

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} se encontro pregunta
   */
  getQuestionIndex() {
  return this.questions[this.questionIndex];
  
    
  }

  isEnded() {
    // return this.questions.length === this.questionIndex;
    return this.questionIndex === 5 ? 1 : 0 || this.final ? 2: 0
  }
/**
	 * 
	 * @param {String} answer 
	 */
  /* guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  
  } */
  guess(answer) {
		if (this.getQuestionIndex().correctAnswer(answer)) {
			this.score++;
			if (this.questionIndex=== 5) {
				this.score = this.score + this.score;
			}
			this.questionIndex++;
		} else 
			this.final = true;
      
  }
  
}
