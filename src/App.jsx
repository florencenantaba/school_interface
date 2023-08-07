<<<<<<< HEAD

// import '.App.css'
import Counter from './components/Counter'

import React from 'react'
import { Route, Routes } from 'react-router' 
=======
//import React from 'react'
import { Route, Routes } from 'react-router'
>>>>>>> 5aab80f8278983f99ec18c5c001c130e1c0169a8

//components
import Staff from './components/Stafftable.jsx'
import Nav from './components/Nav.jsx'
import Clubs from './components/Clubs.jsx';
import Courses from './components/Courses.jsx'
import StudentTable from './components/students.jsx'
import AddDepartment from './components/AddDepartment.jsx';
import EditDepartment from './components/EditDepartment.jsx';
import Departments from './components/Departments.jsx';
import AddClub from './components/AddClub.jsx'

function App() {

<<<<<<< HEAD
  return(
    <div>
      <Counter></Counter>
    </div>

  )
=======
>>>>>>> 5aab80f8278983f99ec18c5c001c130e1c0169a8

  return (
    <>
      <div className="main">
        <Nav />
        <div className="view">

      <Routes>
      <Route path='/staff' element={<Staff />} />
            <Route path='/students' element={<StudentTable />} />
            <Route path='/clubs' element={<Clubs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/departments' element={<Departments/>}/>
            <Route path='/departments/:id' element={<EditDepartment/>}/>
            <Route path='/AddDepartment' element={<AddDepartment/>}/>
            <Route path='//add/club' element={<AddDepartment/>}/>
      </Routes>
    
          
    </div>
    </div>
     
    </>

  )
 
}

export default App

// JSX =JS + HTML+  XML(you can define custom elements)

//<Person></Person>