import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import './ElectionQuiz.css';

const QUESTIONS = [
  {
    id: 1,
    question: "What is the minimum age requirement to be eligible to vote in India?",
    options: ["16 Years", "18 Years", "21 Years", "25 Years"],
    correctIndex: 1,
    explanation: "According to the Constitution of India, any citizen who is 18 years of age or older on the qualifying date is eligible to vote."
  },
  {
    id: 2,
    question: "What does EVM stand for?",
    options: ["Electronic Voting Machine", "Electoral Verification Module", "Election Voting Mechanism", "Electronic Voter Matrix"],
    correctIndex: 0,
    explanation: "EVM stands for Electronic Voting Machine, which is used to record votes securely without using paper ballots."
  },
  {
    id: 3,
    question: "Which form must be filled by a first-time voter to register their name in the electoral roll?",
    options: ["Form 7", "Form 8", "Form 6", "Form 4"],
    correctIndex: 2,
    explanation: "Form 6 is the application form for the inclusion of a name in the electoral roll for first-time voters."
  },
  {
    id: 4,
    question: "What is the purpose of the VVPAT machine attached to the EVM?",
    options: ["To print a receipt for the voter to take home", "To verify the identity of the voter", "To print a paper slip showing the candidate voted for", "To count the votes instantly"],
    correctIndex: 2,
    explanation: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip for 7 seconds so the voter can verify that their vote went to the chosen candidate. It then drops into a secure box."
  },
  {
    id: 5,
    question: "What does the NOTA option on the EVM allow a voter to do?",
    options: ["Vote for multiple candidates", "Reject all candidates contesting the election", "Register a complaint against a candidate", "Skip voting for that specific constituency"],
    correctIndex: 1,
    explanation: "NOTA stands for 'None of the Above'. It allows voters to officially register their disapproval of all candidates contesting in that election."
  }
];

const ElectionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === QUESTIONS[currentQuestion].correctIndex) {
      setScore(score + 10); // 10 points per correct answer
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score >= 40) {
        triggerConfetti();
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9933', '#FFFFFF', '#138808']
    });
  };

  if (showResult) {
    const percentage = (score / (QUESTIONS.length * 10)) * 100;
    return (
      <div className="quiz-container">
        <div className="quiz-card" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Award size={64} color={percentage >= 80 ? 'var(--saffron)' : 'var(--accent-blue)'} />
          <h2 className="quiz-result-score">{score} Points</h2>
          <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
            {percentage === 100 ? "Perfect Score! You are an Election Expert 🏆" : 
             percentage >= 60 ? "Great Job! You are ready for the polls 🌟" : 
             "Good Try! Review the flashcards to learn more 📚"}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            You scored {score} out of {QUESTIONS.length * 10} possible points.
          </p>
          <button className="btn btn-primary" onClick={resetQuiz}>
            <RotateCcw size={18} /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Test Your Knowledge</h2>
        <p className="section-subtitle">Take this quick quiz to see how election-ready you are.</p>
      </div>

      <div className="quiz-card">
        <div className="quiz-header">
          <span className="quiz-progress">Question {currentQuestion + 1} of {QUESTIONS.length}</span>
          <span className="quiz-score">Score: {score}</span>
        </div>

        <h3 className="quiz-question">{question.question}</h3>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            let className = 'quiz-option';
            if (isAnswered) {
              if (index === question.correctIndex) {
                className += ' correct';
              } else if (index === selectedAnswer) {
                className += ' incorrect';
              }
            }

            return (
              <button 
                key={index} 
                className={className}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`quiz-feedback ${selectedAnswer === question.correctIndex ? 'correct' : 'incorrect'}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: selectedAnswer === question.correctIndex ? 'var(--green)' : '#EF4444' }}>
              {selectedAnswer === question.correctIndex ? <CheckCircle size={20} /> : <XCircle size={20} />}
              {selectedAnswer === question.correctIndex ? "Correct!" : "Incorrect"}
            </div>
            <p>{question.explanation}</p>
          </div>
        )}

        {isAnswered && (
          <button className="btn btn-primary quiz-next-btn" onClick={handleNextQuestion}>
            {currentQuestion === QUESTIONS.length - 1 ? 'See Results' : 'Next Question'} <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ElectionQuiz;
