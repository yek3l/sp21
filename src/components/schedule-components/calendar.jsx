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
      let apiKey = "AIzaSyAPCQsLN6kzHXHxk2yFZFg-qk3y7ESqg9I"
      let eventSources = [
        { 
            googleCalendarId: 'berkeley.edu_k2g60q1sehd2u0ujd257jqm7h0@group.calendar.google.com',
            className : 'oh-calendar',
            color: "#00a178"
        },
        { 
            googleCalendarId: 'berkeley.edu_1g3duo9lb53vu09orjictriud4@group.calendar.google.com',
            className : 'disc-calendar',
            color : "#8f56e3"
        },
        { 
            googleCalendarId: 'berkeley.edu_d358eocqj23pak3atie23vk35o@group.calendar.google.com',
            className : 'lab-calendar',
            color: "#F3B200"
        },
        { 
          googleCalendarId: 'berkeley.edu_7qpoo4ph13p55e4ukmnpvqusdk@group.calendar.google.com',
          className : 'lect-calendar',
          color: "#EE7C2F"
      }
    ]

      if (isBrowser) {
        return (
          <div className="calendar-container">
            <FullCalendar
                googleCalendarApiKey={apiKey}
                eventSources={eventSources}
                contentHeight="auto"
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
        <div className="calendar-container">
          <FullCalendar
              googleCalendarApiKey={apiKey}
              eventSources={eventSources}
              contentHeight="auto"
              plugins={[ 
                timeGridPlugin,
                googleCalendarPlugin,
                bootstrapPlugin
              ]}
              themeSystem="bootstrap"
              initialView="timeGridDay"
          />
        </div>
      )
    }
  }