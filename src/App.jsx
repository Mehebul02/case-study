
import { useState } from 'react';
import './App.css'
// import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [marks, setMarks] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [dueDate, setDueDate] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would make a request to your backend to create the assignment
    // with the provided data
    // Example:
    /*
    fetch('/api/createAssignment', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        marks,
        thumbnail,
        difficulty,
        dueDate
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setSuccessMessage('Assignment created successfully');
      // Clear form fields or redirect to another page
    })
    .catch(error => console.error('Error creating assignment:', error));
    */
  };
  return (
    <>
     <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Assignment</h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full p-2"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Marks:</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Thumbnail Image URL:</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Difficulty Level:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="border rounded w-full p-2">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Due Date:</label>
          <DatePicker selected={dueDate} onChange={date => setDueDate(date)} className="border rounded w-full p-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Assignment</button>
      </form>
    </div>
    </>
  )
}

export default App
