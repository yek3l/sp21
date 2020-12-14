import React from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/sassets/schedule.scss";


export default class Calendar extends React.Component {
    render() {
      return (
          <div className="col">
              <div className="calendar-container">
                <FullCalendar
                    plugins={[ 
                      timeGridPlugin,
                      googleCalendarPlugin,
                      bootstrapPlugin
                    ]}
                    themeSystem="bootstrap"
                    initialView="timeGridWeek"
                />
              </div>
          </div>
      )
    }
  }