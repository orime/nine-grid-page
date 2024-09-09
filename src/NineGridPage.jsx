import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GridCell from './GridCell';

const NineGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  height: 100vh;
//      @media (max-width: 768px) {
//      grid-template-columns: repeat(2, 1fr);
//      grid-template-rows: repeat(4, 1fr);
//    }

//    @media (max-width: 480px) {
//      grid-template-columns: repeat(1, 1fr);
//      grid-template-rows: repeat(9, 1fr);
//    }
`;

const NineGridPage = () => {
     const [answers, setAnswers] = useState([...Array(9)].map(() => ''));
     const [gridData, setGridData] = useState([
         { text: '' },
         { text: '' },
         { text: '' },
         { text: '' },
         { text: '' },
       { text: '' },
       { text: '' },
       { text: '' },
       { text: '' },
     ]);

     useEffect(() => {
        console.log(answers, 'answers');
       // 当答案发生变化时，更新 gridData
       setGridData([
        ...answers.map((answer, index) => ({ text: answer })),
       ]);
     }, [answers]);

     const exportAsText = () => {
        const content = `问题：${answers[4]}\n答案：\n${answers.join('\n')}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '问题与答案.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };

console.log(gridData, 'gridData');

  return (
    <NineGridContainer>
       {gridData.map((cellData, index) => (
         <GridCell
           key={index}
           isCenter={index === 4}
           text={cellData.text}
           exportAsText={exportAsText}
           onInputChange={(value) => {
            console.log(value, 'value')

               const newAnswers = [...answers];
               newAnswers[index - 1] = value;
               setAnswers(newAnswers);
             
           }}
         />
       ))}
    </NineGridContainer>
  );
};

export default NineGridPage;