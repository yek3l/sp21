import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "../../styles/sassets/schedule.scss";

export default class Calendar extends React.Component {
    render() {
      return (
          <div className="col">
              <div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
              </div>
          </div>
        
      )
    }
  }