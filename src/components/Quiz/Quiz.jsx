import React, { useState } from 'react';
import './Quiz.css';
import Button from '../Button/Button';

const DettolQuizComplete = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "ความรักที่คุณอยากสัมผัสเป็นรูปแบบได ?",
      type: "image",
      answers: [
        { 
          id: "romantic", 
          text: "โรแมนติก หอมอบอุ่น",
          icon: <img src="/romantic.png" alt="romantic" style={{width: 160, height: 160}} />, 
          bgColor: "#c8e6c8",
          description: "โรแมนติก หอมอบอุ่น"
        },
        { 
          id: "fresh", 
          text: "สดใส ขี้อ้อน ใกล้ชิด",
          icon: <img src="/fresh.png" alt="fresh" style={{width: 160, height: 160}} />, 
          bgColor: "#c8e6c8",
          description: "สดใส ขี้อ้อน ใกล้ชิด"
        },
        { 
          id: "simple", 
          text: "เรียบง่าย เบาสบาย",
          icon: <img src="/simple.png" alt="simple" style={{width: 160, height: 160}} />, 
          bgColor: "#c8e6c8",
          description: "เรียบง่าย เบาสบาย"
        },
        { 
          id: "fun", 
          text: "ตื่นเต้น เฟรชสดชื่น",
          icon: <img src="/fun.png" alt="fun" style={{width: 160, height: 160}} />, 
          bgColor: "#c8e6c8",
          description: "ตื่นเต้น เฟรชสดชื่น"
        }
      ]
    },
    {
      id: 2,
      question: "กลิ่นของครีบอาบน้ำแบบใดที่คุณชอบมากที่สุด ?",
      type: "image",
      answers: [
        { 
          id: "fruit", 
          text: "กลิ่นผลไม้",
          icon: <img src="/brush.png" alt="brush" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "แปรงฟัน"
        },
        { 
          id: "flower", 
          text: "กลิ่นดอกไม้",
          icon: <img src="/fresh.png" alt="fresh" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "แช่น้ำ"
        },
        { 
          id: "aroma", 
          text: "กลิ่นอโรม่า",
          icon: <img src="/foam.png" alt="foam" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "ฟองสบู่"
        },
        { 
          id: "babypowder", 
          text: "กลิ่นแป้งเด็ก",
          icon: <img src="/hairwash.png" alt="hairwash" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "สระผม"
        }
      ]
    },
    {
      id: 3,
      question: "คุณถูส่วนไหนของร่างกายเป็นอันดับแรก?",
      type: "image",
      answers: [
        { 
          id: "hand", 
          text: "มือ",
          icon: <img src="/hand.png" alt="hand" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "มือ"
        },
        { 
          id: "back", 
          text: "หลัง",
          icon: <img src="/back.png" alt="back" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "หลัง"
        },
        { 
          id: "arm", 
          text: "แขน",
          icon: <img src="/arm.png" alt="arm" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "แขน"
        },
        { 
          id: "body", 
          text: "ลำตัว",
          icon: <img src="/body.png" alt="body" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "ลำตัว"
        }
      ]
    },
    {
      id: 4,
      question: "คุณคิดว่าอะไรสำคัญที่สุดในการเลือกครีมอาบน้ำ?",
      type: "image",
      answers: [
        { 
          id: "efficiency", 
          text: "ประสิทธิภาพในการทำความสะอาด",
          icon: <img src="/cleanefficiancy.png" alt="cleanefficiancy" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "ประสิทธิภาพในการทำความสะอาด"
        },
        { 
          id: "protection", 
          text: "การบำรุงผิวหลังอาบน้ำ",
          icon: <img src="/moiture.png" alt="moiture" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "การบำรุงผิวหลังอาบน้ำ"
        },
        { 
          id: "scent_lasting", 
          text: "กลิ่นหอมติดตัว",
          icon: <img src="/longlasting.png" alt="longlasting" style={{width: 160, height: 160}} />,
          bgColor: "#c8e6c8",
          description: "กลิ่นหอมติดตัว"
        },
        { 
          id: "gentle_clean", 
          text: "ความรู้สึกสดชื่นขณะอาบ",
          icon: <img src="/freshness.png" alt="freshness" style={{width: 160, height: 160}} />,
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
    // Handle quiz completion - question 1 routing
    const question1Answer = selectedAnswers[0]; // question 1 (0-indexed)
    
    let resultRoute;
    if (question1Answer === 'romantic') {
      // Random selection between lavender and sakura
      resultRoute = Math.random() < 0.5 ? 'lavender' : 'scent1';
    } else if (question1Answer === 'fresh') {
      resultRoute = 'scent2'; // peach
    } else if (question1Answer === 'simple') {
      resultRoute = 'protection'; // honey
    } else if (question1Answer === 'fun') {
      resultRoute = 'gentle'; // apple
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
              onTouchEnd={() => handleAnswerSelection(answer.id)}
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
