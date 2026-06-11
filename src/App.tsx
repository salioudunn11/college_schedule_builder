import { useState } from 'react'
import './App.css'
import Header from './Header';

// import { Fragment } from 'react';

// Using Chatgpt to help with JavaScript . I Also had Help from TA




export type Course = {
  course: string,
  day: string,
  startTime: string,
  endTime: string
}

const App = () => {


  const [courses, setCourses ] = useState<Course[]>([]);



return (
  <>
    <Header setCourses={setCourses} />
 
    
        <table>
            <caption><b><h2 id="course">Your Course Schedule</h2></b></caption>

            <tr>
                <th>Course</th>
                <th>Day</th>
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Links</th>
            </tr>
        {
  courses.map((courseItem, index) => (
    /*<div key={index}>
      <p>{courseItem.course} - {courseItem.day} - {courseItem.startTime} - {courseItem.endTime}</p>
    </div>
    
    
            <p style="text-align:center;">
            <a href="index.html">Go Back to Home</a> |
            <a href="happyhour.html">View Happy Hour</a> |
            <a href="mailto:restaurant@night.com">Contact Us</a> |
            <a href="#Menu">Top Of Menu</a>

        </p>
        */
            <tr key={index}>
                <td>{courseItem.course}</td>
                <td>{courseItem.day}</td>
                <td>{courseItem.startTime}</td>
                <td>{courseItem.endTime}</td>
            </tr>
  ))
}   




        </table>
        
          <br></br>
            <a href="#Top">Top Of Page</a>

    </>

)
      




}



export default App;