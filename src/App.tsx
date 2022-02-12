import React from 'react';
import Calender from './components/Calendar';
import Schedule from './components/Schedule';
// import styled from 'styled-components';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        flex: '0.3',
        height: '100vh',
        backgroundColor: '#E2E2E2'
      }}><Schedule /></div>
      <div
        style={{
          flex: '0.5',
          width: '100vh',
        }}><Calender /></div>
    </div>
  );
}

export default App;
