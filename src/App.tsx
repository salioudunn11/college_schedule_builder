import { useState } from 'react'
import './App.css'
// import { Fragment } from 'react';


const App = () => {

  const [course, setCourse ] = useState('');
  const [courses, setCourses ] = useState([]);

  const [day, setDay ] = useState('');
  const [startTime, setStartTime ] = useState('');
  const [endTime, setEndTime] = useState('');

return (
  <>
    <h1>College Schedule Builder</h1>
    <p>It's time to build your schedule.</p>
  
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
             
        <input name='course' 
               id='course' 
               value={course}
               onChange={(event) => setCourse(event.target.value)}
        />

        <select id="day">
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>

        </select>


        <input name='startTime' 
               id='startTime' 
               value={startTime}
               onChange={(event) => setStartTime(event.target.value)}
        />
        <input name='endTime' 
               id='endTime' 
               value={endTime}
               onChange={(event) => setEndTime(event.target.value)}
        />

        <button type='submit'>
            send
        </button>           
    </form>
    </>

)
      




}


export default App;