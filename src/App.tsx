import React from 'react';
import Calender from './components/Calendar';
import Sidebar from './components/Sidebar';
// import styled from 'styled-components';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Calender />
    </div>
  );
}

export default App;
