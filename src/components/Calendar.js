import React, { useState } from 'react';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    if (!eventName.trim()) return;

    const updatedEvents = [...events, eventName];
    setEvents(updatedEvents);
    setEventName('');
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div className="calendar">
      <h2>Calendar Events</h2>
      <form onSubmit={addEvent}>
        <input
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Add new event"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {events.map((ev, i) => (
          <li key={i}>
            {ev} <button onClick={() => deleteEvent(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
