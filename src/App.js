import React from 'react';
import './App.css';
import Grid from './Grid';
import { toJpeg } from 'html-to-image';

function App() {
  const handleExportImage = async () => {
    const element = document.getElementById('grid-export');
    const image = await toJpeg(element, { quality: 0.95 });
    const link = document.createElement('a');
    link.download = 'grid-image.jpeg';
    link.href = image;
    link.click();
  };
  return (
    <div id="grid-export" className="App">
      <h1>九宫格方案管理</h1>
      <Grid />
      <div></div>
      <button onClick={handleExportImage} >Export as Image</button>
    </div>
  );
}

export default App;