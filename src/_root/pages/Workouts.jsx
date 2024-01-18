import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'


export default function Workouts() {

  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = () => {
    Axios.get('http://localhost:8000/workouts/').then((res) => {
      setWorkouts(res.data)
      console.log(res.data)
  })  
  }

  useEffect(() => {
    fetchWorkouts()
    }, []);

  let workoutList = workouts.map(workout => {
    return (
      <Link to={`/Workout/${workout.id}`} key={workout.id}>
        <h1 className="workout-name">{workout.name}</h1>
      </Link>
    );
  });
  
  return (
    <div className="workout-container">
      <div className="workout-content">
        <h1>Workouts</h1>
        <h1>{workoutList}</h1>
      </div>
    </div>
  )
}

