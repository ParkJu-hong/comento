import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


function Calender() {
  const [seletedDay, setSeletedDay] = useState()

  useEffect(()=>{
    console.log('오늘 => ', new Date().getFullYear(), '/', new Date().getMonth(), '/',new Date().getDate());
  },[])


  const modifiersStyles = {
    selectDay: {
      color: '#2656ff',
      backgroundColor: '#fff'
    },
    today: {
      color: 'black'
    }
  };
  const _modifiers = {
    thursdays: { daysOfWeek: [4] },
    birthday: new Date(2018, 9, 30),
    _selectedDay : new Date() 
  };
  const _modifiersStyles = {
    birthday: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
    thursdays: {
      color: '#ffc107',
      backgroundColor: '#fffdee',
    },
  };

  return (
    <div style={{

    }}>
      {/* <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />  */}
      <DayPicker onDayClick={(day) => {
        console.log(day.getMonth() + 1);
        console.log(day.getDate());

        console.log(day.getFullYear);
      }}
        selectedDays={undefined}
        modifiersStyles={modifiersStyles}

      />
    </div>
  );
}

export default Calender;

