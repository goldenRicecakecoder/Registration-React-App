
import './App.css';
import { useCallback,  useState } from 'react';


function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    course: '',
    enrollmentNo: '',
    enrollyear: ''
  })

  
  const submitHandler = (event) => {
   
    console.log(formValues);
    
  }

  const changeHandler = useCallback((e) => {
    console.log(e.target?.name, e.target?.value)
    if (e.target?.name === 'name') {
      setFormValues(prev => ({...prev, name: e.target.value}))
    } else if (e.target?.name === 'course') {
      setFormValues(prev => ({...prev, course: e.target.value}))
    } else if (e.target?.name === 'enrollmentNo') {
      setFormValues(prev => ({...prev, enrollmentNo: e.target.value}))
    } else if (e.target?.name === 'enrollyear') {
      setFormValues(prev => ({...prev, enrollyear: e.target.value}))
    }
  }, [])

  
    
  
  return (
    <div className="App">
      
      <div className='container'>
        <form  className= 'form' onSubmit={submitHandler}>
          <div>
            <label className="student">Student Registration Form</label>
          </div>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id="name" onChange={changeHandler} required></input>
          </div>
          <div>
            <label htmlFor='course'>Course</label>
            <input type='text' name='course' id="course" onChange={changeHandler} required></input>
          </div>
          <div>
            <label htmlFor='enrollmentNo'>Enrollment Number</label>
            <input type='text' name='enrollmentNo' id="enrollmentno" onChange={changeHandler} required></input>
          </div>
          <div>
            <label htmlFor='enrollyear'>Enrollment Year</label>
            <input type='text' name='enrollyear' id="enrollyear" onChange={changeHandler} required></input>
          </div>
          
         
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default App;
