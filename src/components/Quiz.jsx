import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Subhash Chandra Bose",
      "B. R. Ambedkar",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Peacock"],
    answer: "Tiger",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Isaac Newton",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which is the smallest planet in our Solar System?",
    options: ["Mercury", "Mars", "Venus", "Neptune"],
    answer: "Mercury",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Dollar"],
    answer: "Yen",
  },
];

function Quiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
setTimeout(()=>{
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
}, 1000);
  };

  const restartQuiz = () => {
    setStartQuiz(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          width: "500px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        {!startQuiz ? (
          <>
            <h1 style={{ color: "#764ba2" }}> GK Quiz Challenge</h1>

            <p>
              Test your General Knowledge with 10 exciting questions!
            </p>

            <button
              onClick={() => setStartQuiz(true)}
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#764ba2",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Start Quiz 🚀
            </button>
          </>
        ) : showResult ? (
          <>
            <h1>🎉 Quiz Completed!</h1>

            <h2>
              Your Score: {score} / {questions.length}
            </h2>

            <h3>
              {score >= 8
                ? "Excellent! 🌟"
                : score >= 5
                ? "Good Job 👍"
                : "Keep Practicing 📚"}
            </h3>

            <button
              onClick={restartQuiz}
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#28a745",
                color: "white",
                cursor: "pointer",
              }}
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <h2>
              Question {currentQuestion + 1} / {questions.length}
            </h2>

            <div
              style={{
                width: "100%",
                background: "#ddd",
                height: "10px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: `${
                    ((currentQuestion + 1) / questions.length) * 100
                  }%`,
                  background: "#764ba2",
                  height: "10px",
                  borderRadius: "10px",
                }}
              ></div>
            </div>

            <h3>{questions[currentQuestion].question}</h3>

            {questions[currentQuestion].options.map((option, index) =>
            {            const correctAnswer=questions[currentQuestion].answer;
            let background="#f4f4f4";
            
            if(selectedAnswer)
                {
                    if(option === correctAnswer)
                    {
                        background="#4CAF50";
                    }
                    else if(option === selectedAnswer)
                    {
                        background="#f44336";
                    }
                }
                return(
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer!== null}
                style={{
                  display: "block",
                  width: "100%",
                  margin: "10px 0",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background:background,
                  color:selectedAnswer?"white":"black",
                  cursor: "pointer",
                  fontSize: "15px",
                  transition:"0.3s",
                }}
              >
                {option}
              </button>
            );
})}
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;