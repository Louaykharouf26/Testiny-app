export const Quiz_html = {
    topic: 'Html',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'What does HTML stand for?',
        choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language','Home Tool Markup Language', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Hyper Text Markup Language',
      },
      {
        question:
          'What is the correct HTML element for inserting a line break?',
        choices: ['<break>', '<br>', '<lb>', 'None of the above'],
        type: 'MCQs',
        correctAnswer: '<br>',
      },
      {
        question:
          'Choose the correct HTML element to define important text',
        choices: [
          '<strong>',
          '<i>',
          '<b>',
          '<important>',
        ],
        type: 'MCQs',
        correctAnswer: '<strong>',
      },
      {
        question: 'Which of these elements are all <table> elements?',
        choices: ['<table><tr><td>', '<thead><body><tr>', '<table><tr><tt>', '<table><head><tfoot>'],
        type: 'MCQs',
        correctAnswer: '<table><tr><td>',
      },
    ],
  }