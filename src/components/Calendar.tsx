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
        renderDay={renderDay}
      />
    </div>
  );
}

function renderDay(data: any){
  return (
  <div style={{ 
    height: "100%",
    width: "100%",
    position: 'relative'}}>
      <div style={{
        position: 'absolute',
        color: 'black',
        bottom: 0,
        right: 0,
        fontSize: 30,
      }}>

      </div>
  </div>)
}

// function renderDay(day:any):any {
//   const birthdays = {
//     3: ['Mirko', 'Gianni'],
//     8: ['Elena'],
//     9: ['Irene'],
//     12: ['Paolo', 'Giorgia'],
//     18: ['Claudia'],
//     22: ['Maria', 'Luigi'],
//     25: ['Simone'],
//     26: ['Marta'],
//   };
//   const date = day.getDate();
//   const dateStyle = {
//     position: 'absolute',
//     color: 'lightgray',
//     bottom: 0,
//     right: 0,
//     fontSize: 20,
//   };
//   const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' };
//   const cellStyle = {
//     height: 50,
//     width: 60,
//     position: 'relative',
//   };
//   return (
//     <div style={cellStyle}>
//       <div style={dateStyle}>{date}</div>
//       {birthdays[date] &&
//         birthdays[date].map((name, i) => (
//           <div key={i} style={birthdayStyle}>
//             🎁 {name}
//           </div>
//         ))}
//     </div>
//   );
// }

export default Calender;

