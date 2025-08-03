import React, { useState } from 'react';
import './Quiz.css';
import Button from '../Button/Button';

const DettolQuizComplete = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "ความรักที่คุณอยากส่งผู้สำคัญในรูปแบบไหน?",
      type: "image",
      answers: [
        { 
          id: "romantic", 
          text: "โรแมนติก หอมอบอุ่น",
          icon: "💕",
          bgColor: "#c8e6c8",
          description: "โรแมนติก หอมอบอุ่น"
        },
        { 
          id: "fresh", 
          text: "สดใส ขี้อ้อน ใกล้ชิด",
          icon: "🌸",
          bgColor: "#c8e6c8",
          description: "สดใส ขี้อ้อน ใกล้ชิด"
        },
        { 
          id: "simple", 
          text: "เรียบง่าย เบาสบาย",
          icon: "🌿",
          bgColor: "#c8e6c8",
          description: "เรียบง่าย เบาสบาย"
        },
        { 
          id: "fun", 
          text: "ตื่นเต้น เฟรชสดชื่น",
          icon: "✨",
          bgColor: "#c8e6c8",
          description: "ตื่นเต้น เฟรชสดชื่น"
        }
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
          bgColor: "#c8e6c8",
          description: "แปรงฟัน"
        },
        { 
          id: "bath", 
          text: "แช่น้ำ",
          icon: "🛁",
          bgColor: "#c8e6c8",
          description: "แช่น้ำ"
        },
        { 
          id: "foam", 
          text: "ฟองสบู่",
          icon: "🧼",
          bgColor: "#c8e6c8",
          description: "ฟองสบู่"
        },
        { 
          id: "shower", 
          text: "สระผม",
          icon: "🚿",
          bgColor: "#c8e6c8",
          description: "สระผม"
        }
      ]
    },
    {
      id: 3,
      question: "คุณดูแลส่วนไหนของร่างกายเป็นอันดับแรก?",
      type: "image",
      answers: [
        { 
          id: "before", 
          text: "มือ",
          icon: "🖐️",
          bgColor: "#c8e6c8",
          description: "มือ"
        },
        { 
          id: "after", 
          text: "หลัง",
          icon: "🫶",
          bgColor: "#c8e6c8",
          description: "หลัง"
        },
        { 
          id: "rarely", 
          text: "แขน",
          icon: "💪",
          bgColor: "#c8e6c8",
          description: "แขน"
        },
        { 
          id: "late", 
          text: "ลำตัว",
          icon: "🫂",
          bgColor: "#c8e6c8",
          description: "ลำตัว"
        }
      ]
    },
    {
      id: 4,
      question: "อะไรคือสิ่งที่ทำให้คุณรู้สึกว่า \"อาบน้ำแล้วสบายตัว\" ที่สุด?",
      type: "image",
      answers: [
        { 
          id: "water_quality", 
          text: "อุณหภูมิของน้ำ",
          icon: "🌡️",
          bgColor: "#c8e6c8",
          description: "อุณหภูมิของน้ำ"
        },
        { 
          id: "scent", 
          text: "กลิ่นหอมของครีมอาบน้ำ",
          icon: "🌺",
          bgColor: "#c8e6c8",
          description: "กลิ่นหอมของครีมอาบน้ำ"
        },
        { 
          id: "cleanliness", 
          text: "การสครับ/ขัดผิว",
          icon: "🧖‍♀️",
          bgColor: "#c8e6c8",
          description: "การสครับ/ขัดผิว"
        },
        { 
          id: "feeling", 
          text: "ความรู้สึกสะอาดหลังอาบ",
          icon: "✨",
          bgColor: "#c8e6c8",
          description: "ความรู้สึกสะอาดหลังอาบ"
        }
      ]
    },
    {
      id: 5,
      question: "คุณคิดว่าอะไรสำคัญที่สุดในการเลือกครีมอาบน้ำ?",
      type: "image",
      answers: [
        { 
          id: "efficiency", 
          text: "ประสิทธิภาพในการทำความสะอาด",
          icon: "🧽",
          bgColor: "#c8e6c8",
          description: "ประสิทธิภาพในการทำความสะอาด"
        },
        { 
          id: "protection", 
          text: "การบำรุงผิวหลังอาบน้ำ",
          icon: "🛡️",
          bgColor: "#c8e6c8",
          description: "การบำรุงผิวหลังอาบน้ำ"
        },
        { 
          id: "scent_lasting", 
          text: "กลิ่นหอมติดตัว",
          icon: "🌹",
          bgColor: "#c8e6c8",
          description: "กลิ่นหอมติดตัว"
        },
        { 
          id: "gentle_clean", 
          text: "ความรู้สึกสดชื่นขณะอาบ",
          icon: "💫",
          bgColor: "#c8e6c8",
          description: "ความรู้สึกสดชื่นขณะอาบ"
        }
      ]
    }
  ];

  const handleAnswerSelection = (answerId) => {
    const newAnswers = {
      ...selectedAnswers,
      [currentQuestion]: answerId
    };
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinishQuiz = () => {
    // Handle quiz completion - question 5 routing
    const question5Answer = selectedAnswers[4]; // question 5 (0-indexed)
    
    let resultRoute;
    if (question5Answer === 'efficiency') {
      resultRoute = 'scent1'; // Option 1 now routes to ScentQuote1 with Lavender background
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
          {/* Next button always visible, but disabled until answer is selected */}
          {currentQuestion < questions.length - 1 && (
            <div className="next-button-container">
              <Button
                text="ถัดไป"
                onClick={handleNextQuestion}
                className="smooth-button"
                disabled={!selectedAnswers[currentQuestion]}
              />
            </div>
          )}
        </div>
        {/* Finish button for last question */}
        {currentQuestion === questions.length - 1 && (
          <div className="finish-button-container">
            <Button
              text="เสร็จสิ้น"
              onClick={handleFinishQuiz}
              className="smooth-button"
              disabled={!selectedAnswers[currentQuestion]}
            />
          </div>
        )}
        
        {/* Decorative star */}
        <div className="star star-bottom">✦</div>
      </div>
  );
};

export default DettolQuizComplete;