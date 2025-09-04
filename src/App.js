import React from 'react';
import TaskList from './components/TaskList';
import HabitTracker from './components/HabitTracker';
import Notes from './components/Notes';
import Calendar from './components/Calendar';
import Weather from './components/Weather';
import './styles/App.css';

function App() {
  return (
    <div className="dashboard">
      <header>
        <h1>My Productivity Dashboard</h1>
      </header>

      <main>
        <section className="widget">
          <Weather />
        </section>

        <section className="widget">
          <TaskList />
        </section>

        <section className="widget">
          <HabitTracker />
        </section>

        <section className="widget">
          <Notes />
        </section>

        <section className="widget">
          <Calendar />
        </section>
      </main>
    </div>
  );
}

export default App;
