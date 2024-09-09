import React, { useState } from 'react';
import { toJpeg } from 'html-to-image';

const Grid = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(Array(9).fill(''));

  const handleExportText = () => {
    const text = `问题：${question}\n` + answers.map((answer, index) => `答案${index + 1}：${answer || '暂无，请继续发挥聪明才智吧'}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard');
    });
  };

  const handleExportImage = async () => {
    const element = document.getElementById('grid');
    const image = await toJpeg(element, { quality: 0.95 });
    const link = document.createElement('a');
    link.download = 'grid-image.jpeg';
    link.href = image;
    link.click();
  };

  return (
    <div id="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      <div style={{ gridColumn: '1 / -1', gridRow: '1 / 2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
          style={{ width: '100%', padding: '10px', textAlign: 'center' }}
        />
      </div>
      {answers.map((_, index) => (
        <input
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
      <button onClick={handleExportImage} >Export as Image</button>
    </div>
  );
};

export default Grid;