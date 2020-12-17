import React from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/sassets/schedule.scss";
import { isBrowser } from "react-device-detect";


export default class Calendar extends React.Component {
    render() {
      if (isBrowser) {
        return (
          <div className="calendar-container col">
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
        )
      }
      return (
        <div className="calendar-container col">
          <FullCalendar
              plugins={[ 
                timeGridPlugin,
                googleCalendarPlugin,
                bootstrapPlugin
              ]}
              contentHeight="1000px"
              themeSystem="bootstrap"
              initialView="timeGridDay"
          />
        </div>
      )
    }
  }