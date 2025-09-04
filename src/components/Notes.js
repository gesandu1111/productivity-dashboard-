import React, { useState, useEffect } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const note = e.target.note.value.trim();
    if (!note) return;

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    e.target.note.value = '';
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="notes">
      <h2>Notes</h2>
      <form onSubmit={addNote}>
        <input name="note" placeholder="Add new note" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>
            {n} <button onClick={() => deleteNote(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
