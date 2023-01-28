export const Quiz_Css = {
    topic: 'Css',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'What does Css stand for?',
        choices: ['Cascading Style Sheets', 'Computer Style Sheets','Colorful Style Sheets', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Cascading Style Sheets',
      },
      {
        question:
          'Which HTML tag is used to define an internal style sheet?',
        choices: ['<style>', '<css>', '<script>', 'None of the above'],
        type: 'MCQs',
        correctAnswer: '<style>',
      },
      {
        question:
          'Which property is used to change the background color?',
        choices: [
          'background-color',
          'bgcolor',
          'color',
          'backgroundcolor',
        ],
        type: 'MCQs',
        correctAnswer: 'background-color',
      },
      {
        question: 'How do you make each word in a text start with a capital letter?',
        choices: ['text-transform:capitalize', '<text-style:captialize', 'You cant do that with CSS', 'transform:capitalize'],
        type: 'MCQs',
        correctAnswer: 'text-transform:capitalize',
      },
    ],
  }