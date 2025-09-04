import React, { useState, useEffect } from 'react';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    setHabits(storedHabits);
  }, []);

  const addHabit = (e) => {
    e.preventDefault();
    const habit = e.target.habit.value.trim();
    if (!habit) return;

    const updatedHabits = [...habits, habit];
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
    e.target.habit.value = '';
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  return (
    <div className="habit-tracker">
      <h2>Habits</h2>
      <form onSubmit={addHabit}>
        <input name="habit" placeholder="Add new habit" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {habits.map((h, i) => (
          <li key={i}>
            {h} <button onClick={() => deleteHabit(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
