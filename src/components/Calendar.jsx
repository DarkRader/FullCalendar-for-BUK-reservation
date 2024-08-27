import React from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from '@fullcalendar/list';
import * as bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

function Calendar({ googleCalendars }) {
    const googleCalendarApiKey = "AIzaSyARjUqLIMYShXY_JQAuUYdzb3G4Malsv3c";

    const eventDidMount = (info) => {
        const event = info.event;

        const startTime = event.start.toLocaleString([], {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            hour12: false
        });

        const endTime = event.end.toLocaleString([], {
            hour: 'numeric', minute: 'numeric',
            hour12: false
        });

        return  new bootstrap.Popover(info.el, {
            title: event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content: `
                <p><strong>Reservation time:</strong><br>${startTime} - ${endTime}</p>
                <p><strong>Test:</strong><br>${event.extendedProps.color}</p>
                <p><strong>Description:</strong><br>${(event.extendedProps.description || 'N/A').replace(/\n/g, '<br>')}</p>
            `,
            html: true,
        });
    };

    const handleEventClick = (clickInfo) => {
        clickInfo.jsEvent.preventDefault();
    };


    return(
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin, listPlugin]}
                initialView={'dayGridMonth'}
                headerToolbar={
                    {
                        start: 'today prev,next',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }
                }
                nextDayThreshold='08:00:00'
                contentHeight={640}
                dayMaxEventRows={2}
                fixedWeekCount={false}
                firstDay={1}
                googleCalendarApiKey={googleCalendarApiKey}
                eventSources={googleCalendars}
                eventDidMount={eventDidMount}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    omitZeroMinute: true,
                    hour12: false,
                }}
                slotLabelFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    omitZeroMinute: false,
                    meridiem: false,
                    hour12: false,
                }}
                eventClick={handleEventClick}
                navLinks={true}
            />
        </div>
    )
}

export default Calendar