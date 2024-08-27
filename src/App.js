import React, { useState } from 'react';
import Calendar from "./components/Calendar";

function App() {
    const [currentCalendar, setCurrentCalendar] = useState('club'); // Initial selection
    const googleCalendarsClubRoom = [
        {
            googleCalendarId: "c_19586a3da50ca06566ef62012d6829ebf4e3026108212e9f9d0cc2fc6bc7c44a@group.calendar.google.com",
            className: "gcal-club-room",
            backgroundColor: '#9222a7',
            borderColor: '#9222a7',
        },
        {
            googleCalendarId: "c_90c053583d4d2ae156551c6ecd311f87dad610a3272545c363879645f6968cef@group.calendar.google.com",
            className: "gcal-poker",
            backgroundColor: '#ff37da',
            borderColor: '#ff37da',
        },
        {
            googleCalendarId: "c_f8a87bad9df63841a343835e6c559643835aa3c908302680324807b61dcb7e49@group.calendar.google.com",
            className: "gcal-table-soccer",
            backgroundColor: '#008046',
            borderColor: '#008046',
        },
        {
            googleCalendarId: "c_4f3ccb9b25e3e37bc1dcea8784a8a11442d39e700809a12bee21bbeeb67af765@group.calendar.google.com",
            className: "gcal-projector",
            backgroundColor: '#616161',
            borderColor: '#616161',
        },
        {
            googleCalendarId: "c_8fc8c6760f7e32ed57785cf4739dc63e406b4a802aeec65ca0b1a3f56696263d@group.calendar.google.com",
            className: "gcal-pool",
            backgroundColor: '#d91414',
            borderColor: '#d91414',
        },
        {
            googleCalendarId: "c_ac8930b000e43818707d6ff5ec4e40b7ef529f4db79089cd5c3edaa3b59fb41b@group.calendar.google.com",
            className: "gcal-synthesizer",
            backgroundColor: '#f7c13c',
            borderColor: '#f7c13c',
        },
    ]

    const googleCalendarsGrill = [
        {
            googleCalendarId: "c_6cab3396f3e0d400d07904b08f427ff9c66b90b809488cfe6401a87891ab1cfd@group.calendar.google.com",
            className: "gcal-study-room",
            backgroundColor: '#f26f20',
            borderColor: '#f26f20',
        },
    ];

    const googleCalendarsStudyRoom = [
        {
            googleCalendarId: "c_8f07a054dc4cd02f848491ffee9adb0302611811e711ffe921e4025d18d42ef2@group.calendar.google.com",
            className: "gcal-study-room",
            backgroundColor: '#4551b2',
            borderColor: '#4551b2',
        },
        {
            googleCalendarId: "c_609bc4fdefe310e30dec02d90753f434d82cd738818dec679ad018d12731f97f@group.calendar.google.com",
            className: "gcal-study-desk",
            backgroundColor: '#0099e2',
            borderColor: '#0099e2',
        },
    ];

    const handleClubCalendarClick = () => {
        setCurrentCalendar('club');
    };

    const handleStudyCalendarClick = () => {
        setCurrentCalendar('study');
    };

    const handleGrillCalendarClick = () => {
        setCurrentCalendar('grill');
    };

    let calendarComponent;

    switch (currentCalendar) {
        case 'club':
            calendarComponent = <Calendar googleCalendars={googleCalendarsClubRoom} />;
            break;
        case 'study':
            calendarComponent = <Calendar googleCalendars={googleCalendarsStudyRoom} />;
            break;
        case 'grill':
            calendarComponent = <Calendar googleCalendars={googleCalendarsGrill} />;
            break;
        default:
            calendarComponent = <Calendar />;
    }

    return (
        <div className="App">
            <div className="calendar-switch">
                <button onClick={handleClubCalendarClick}>Club Room Calendar</button>
                <button onClick={handleStudyCalendarClick}>Study Room Calendar</button>
                <button onClick={handleGrillCalendarClick}>Grill Calendar</button>
            </div>
            {calendarComponent}
        </div>
    );
}

export default App;
