const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const quizData = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount Denali', 'Mount Fuji'],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: 'Who discovered electricity?',
    options: ['Benjamin Franklin', 'Thomas Edison', 'Isaac Newton', 'Nikola Tesla'],
    correctAnswer: 3,
  },
];

app.get('/quiz', (req, res) => {
  res.json(quizData);
});

app.post('/score', (req, res) => {
  const { score } = req.body;
  res.send(`Your score is ${score}`);
});

app.listen(port, () => {
  console.log(`Quiz app server listening at http://localhost:${port}`);
});
