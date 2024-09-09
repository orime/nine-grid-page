import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Grid = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(Array(9).fill(''));

  const handleExportText = () => {
    const text = `问题：${question}\n` + answers.map((answer, index) => `答案${index + 1}：${answer}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Text copied to clipboard', {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((err) => {
      toast.error('Failed to copy text');
    });
  };


  return (
    <div id="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      <div style={{ gridColumn: '1 / -1', gridRow: '1 / 2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <textarea
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
          style={{ width: '100%', padding: '10px', textAlign: 'center' }}
        />
      </div>
      {answers.map((_, index) => (
        <textarea
          key={index}
          type="text"
          value={answers[index]}
          onChange={(e) => setAnswers(answers.map((a, i) => (i === index ? e.target.value : a)))}
          placeholder={`Answer ${index + 1}`}
          style={{ width: '100%', padding: '10px', textAlign: 'center' }}
        />
      ))}
      <div></div>
      <button onClick={handleExportText} >Export as Text</button>
      
      <ToastContainer position="top-center" limit={1} />
    </div>
  );
};

export default Grid;