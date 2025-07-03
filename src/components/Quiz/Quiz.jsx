import React, { useState } from 'react';
import './Quiz.css';

const DettolQuizComplete = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "ความรักที่คุณอยากส่งผู้สำคัญในรูปแบบไหน?",
      type: "text",
      answers: [
        { id: "romantic", text: "โรแมนติก หอมอบอุ่น" },
        { id: "fresh", text: "สดใส ขี้อ้อน ใกล้ชิด" },
        { id: "simple", text: "เรียบง่าย เบาสบาย" },
        { id: "fun", text: "ตื่นเต้น เฟรชสดชื่น" }
      ]
    },
    {
      id: 2,
      question: "เมื่อต้องอาบน้ำ คุณจะทำอะไรเป็นอันดับแรก?",
      type: "image",
      answers: [
        { 
          id: "brush", 
          text: "แปรงฟัน",
          icon: "🧴",
          bgColor: "#f0f0f0",
          description: "แปรงฟัน"
        },
        { 
          id: "bath", 
          text: "แช่น้ำ",
          icon: "🛁",
          bgColor: "#b8e6e6",
          description: "แช่น้ำ"
        },
        { 
          id: "foam", 
          text: "ฟองสบู่",
          icon: "🧼",
          bgColor: "#f8c8d4",
          description: "ฟองสบู่"
        },
        { 
          id: "shower", 
          text: "สระผม",
          icon: "🚿",
          bgColor: "#b8d4f0",
          description: "สระผม"
        }
      ]
    },
    {
      id: 3,
      question: "คุณดูสวนใหมของร่างกายเป็นอันดับแรก?",
      type: "text",
      answers: [
        { id: "before", text: "มือ" },
        { id: "after", text: "หลัง" },
        { id: "rarely", text: "แขน" },
        { id: "late", text: "ลำตัว" }
      ]
    },
    {
      id: 4,
      question: "อะไรคือสิ่งที่ทำให้คุณรู้สึกว่า \"อาบน้ำแล้วสบายตัว\" ที่สุด?",
      type: "text",
      answers: [
        { id: "water_quality", text: "อุณหภูมิของน้ำ" },
        { id: "scent", text: "กลิ่นหอมของครีมอาบน้ำ" },
        { id: "cleanliness", text: "การสครับ/ขัดผิว" },
        { id: "feeling", text: "ความรู้สึกสะอาดหลังอาบ" }
      ]
    },
    {
      id: 5,
      question: "คุณคิดว่าอะไรสำคัญที่สุดในการเลือกครีมอาบน้ำ?",
      type: "text",
      answers: [
        { id: "efficiency", text: "ประสิทธิภาพในการทำความสะอาด" },
        { id: "protection", text: "การบำรุงผิวหลังอาบน้ำ" },
        { id: "scent_lasting", text: "กลิ่นหอมติดตัว" },
        { id: "gentle_clean", text: "ความรู้สึกสดชื่นขณะอาบ" }
      ]
    }
  ];

  const handleAnswerSelection = (answerId) => {
    const newAnswers = {
      ...selectedAnswers,
      [currentQuestion]: answerId
    };
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000); // Show selection for 1 second
    }
  };

  const handleFinishQuiz = () => {
    // Handle quiz completion - question 5 routing
    const question5Answer = selectedAnswers[4]; // question 5 (0-indexed)
    
    let resultRoute;
    if (question5Answer === 'efficiency') {
      resultRoute = 'efficiency';
    } else if (question5Answer === 'protection') {
      resultRoute = 'protection';
    } else if (question5Answer === 'scent_lasting') {
      // Random selection between two scent components
      resultRoute = Math.random() < 0.5 ? 'scent1' : 'scent2';
    } else if (question5Answer === 'gentle_clean') {
      resultRoute = 'gentle';
    }
    
    console.log('Quiz completed!', selectedAnswers);
    if (onQuizComplete) {
      onQuizComplete(resultRoute, selectedAnswers);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {/* Header with Dettol branding */}
        <div className="quiz-header">
          <div className="dettol-text">DETTOL</div>
          <div className="dettol-logo">
            <div className="logo-circle">
              <div className="logo-text">Dettol</div>
              <div className="logo-cross">
                <div className="cross-vertical"></div>
                <div className="cross-horizontal"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative star */}
        <div className="star star-top">✦</div>
        
        {/* Question section */}
        <div className="question-container">
          <div className="question-number">{currentQ.id}/5</div>
          <div className="question-text">
            {currentQ.question}
          </div>
        </div>
        
        {/* Answer options */}
        <div className={`answers-container ${currentQ.type === 'image' ? 'image-answers' : 'text-answers'}`}>
          {currentQ.answers.map((answer) => (
            <button 
              key={answer.id}
              className={`answer-button ${currentQ.type === 'image' ? 'image-answer' : 'text-answer'} ${
                selectedAnswers[currentQuestion] === answer.id ? 'selected' : ''
              }`}
              onClick={() => handleAnswerSelection(answer.id)}
              style={currentQ.type === 'image' ? { backgroundColor: answer.bgColor } : {}}
            >
              {currentQ.type === 'image' ? (
                <div className="image-answer-content">
                  <div className="answer-icon">{answer.icon}</div>
                  <div className="answer-label">{answer.text}</div>
                </div>
              ) : (
                answer.text
              )}
            </button>
          ))}
        </div>
        
        {/* Finish button for last question */}
        {currentQuestion === questions.length - 1 && selectedAnswers[currentQuestion] && (
          <div className="finish-button-container">
            <button 
              className="finish-button"
              onClick={handleFinishQuiz}
            >
              Finish
            </button>
          </div>
        )}
        
        {/* Decorative star */}
        <div className="star star-bottom">✦</div>
      </div>
    </div>
  );
};

export default DettolQuizComplete;