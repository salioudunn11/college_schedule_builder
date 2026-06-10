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

{
  courses.map((courseItem, index) => (
    <div key={index}>
      <p>{courseItem.course}</p>
      <p>{courseItem.day}</p>
      <p>{courseItem.startTime} - {courseItem.endTime}</p>
    </div>
  ))
}
  
    <form onSubmit={(event) => {
      event.preventDefault();

      // const newCourses = course;


      const newCourse = {
      course: course,
      day: day,
      startTime: startTime,
      endTime: endTime
};
      setCourses([...courses, newCourse]);




    }}>
             
        <select id="course"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
        >
          <option value="">Select Course</option>
          <option value="Intro to Data">Intro to Data</option>
          <option value="Web Programming">Web Programming</option>
          <option value="French">French</option>
          <option value="Database">Database</option>
          <option value="Security">Security</option>

        </select>

        <select id="day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
                >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>

        </select>


        <select id="startTime"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
        >
          <option value="">Starting Time</option>
          <option value="8 AM">8 AM</option>
          <option value="9 AM">9 AM</option>
          <option value="10 AM">10 AM</option>
          <option value="11 AM">11 AM</option>
          <option value="12 PM">12 PM</option>
          <option value="1 PM">1 PM</option>
          <option value="2 PM">2 PM</option>
          <option value="3 PM">3 AM</option>
          <option value="4 PM">4 PM</option>
          <option value="5 PM">5 AM</option>
          <option value="6 PM">6 PM</option>
          <option value="7 PM">7 AM</option>
          <option value="8 PM">8 PM</option>          



        </select>

        <select id="endTime"
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
                >
          <option value="">Ending Time</option>
          <option value="9 AM">9 AM</option>
          <option value="10 AM">10 AM</option>
          <option value="11 AM">11 AM</option>
          <option value="12 PM">12 PM</option>
          <option value="1 PM">1 PM</option>
          <option value="2 PM">2 PM</option>
          <option value="3 PM">3 AM</option>
          <option value="4 PM">4 PM</option>
          <option value="5 PM">5 AM</option>
          <option value="6 PM">6 PM</option>
          <option value="7 PM">7 AM</option>
          <option value="8 PM">8 PM</option>
          <option value="9 PM">9 PM</option>
          <option value="10 PM">10 PM</option>             

        </select>


        <button type='submit'>
            send
        </button>           
    </form>
    </>

)
      




}


export default App;