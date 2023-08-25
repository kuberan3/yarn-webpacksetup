import React from 'react';
import './srtles/index.scss'
import SampleImage from 'assets/SampleImage.js';
import { StyledDiv } from './components/Components';

function App() {
  return (
    <div id='maindiv' >
      <h1>Hello React App</h1>
      <SampleImage></SampleImage>
      <StyledDiv></StyledDiv>
    </div>
  );
}

export default App;
