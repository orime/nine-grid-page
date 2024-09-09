import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridCell = ({ isCenter, text, onInputChange, exportAsText }) => {

  const exportAsImage = () => {
    // 实现导出为图片的逻辑
    console.log('导出为图片功能待实现');
  };

  return (
    <CellContainer>
       {isCenter? <h2>问题</h2> : null}
       <input
           type="text"
           value={text}
           onChange={(e) => onInputChange(e.target.value)}
         />
       { isCenter ? <><button onClick={exportAsText}>导出为文本</button>
       <button onClick={exportAsImage}>导出为图片</button></> : null }
    </CellContainer>
  );
};

export default GridCell;