import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Calender() {

    /*
        캘린더 사이즈를 조절하고 싶으나 width, height와 같은 css로는 
        정사각형을 맞출 수도 없고, heigth가 맞지 않는다.

        FullCalendar defaultView="dayGridMonth" dateClick={this.handleDateClick} select={this.handleSelectClick} selectable='true' plugins={[ dayGridPlugin, interactionPlugin ]}  events={[
                { title: 'event 1', allDay: true, start: '2020-05-29', end: '2020-05-30' },
                { title: 'event 2', allDay: true, start: '2020-05-29', end: '2020-05-30'}
            ]}/>
    */

  return (
    <div style={{
        
    }}>
         <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      /> </div>
  );
}

export default Calender;

