import React, { useState } from "react";

const Student = () => {
  const [formdata, setFormData] = useState(
    {
      name:"",
      adm_no:"",
      course_id:"",
      class_name:"",
      email:""
    }
  )
  function handleChange(e){
    setFormData({...formdata, [e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    // console.log(JSON.stringify(formdata))
    fetch('http://localhost:9292/students',
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Application":"application/json"
        },
        body:JSON.stringify(formdata)
}
      )
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(console.error)
  }
  return (
    <div className="studentbackground">
    <div className="form">
    <h2>Register new student</h2>
    <div className="container">
        <form id="student-form" onSubmit={handleSubmit}>
            <label for="name">Student name</label>
            <input type="text" id="name" name="name" value={formdata.name} onChange={handleChange}/>

            <label for="name">Admission number</label>
            <input type="number" id="admno" name="adm_no" value={formdata.adm_no} onChange={handleChange}/>

            <label for="name">Course ID</label>
            <input type="number" id="course" name="course_id" value={formdata.course_id} onChange={handleChange}/>

            <label for="name">Course name</label>
            <input type="text" id="class" name="class_name" value={formdata.class_name} onChange={handleChange}/>

            <label for="name">Email</label>
            <input type="email" id="email" name="email" value={formdata.email} onChange={handleChange}/>

            <button id="btn" type="submit">Register Student</button>
        </form>
    </div>
    </div>
    </div>
    
  );
};
export default Student;