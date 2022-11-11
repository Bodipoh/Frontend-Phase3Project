import React from "react";
import {Link}from "react-router-dom"



const Dashboard = ({students}) => {

  function handleDelete(id){
    fetch(`http://localhost:9292/students/${id}`,
      {
        method:"DELETE",
      
}
      )
      .then(res=>res.json())
      .then(()=>alert("deleted"))
      .catch(console.error)
  
  }
  return (
    <div className="ml-10">
    <h1>List of all the Students</h1>
      <table>
        <tr>
          <th>No</th>
          <th>Student Name</th>
          <th>Admission number</th>
          <th>Course_id</th>
          <th>Class name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
     
          {students.map((a,index)=>{
            return(
              <tr>

          <td className='px-10'>{index+1}</td>
          <td className='px-10'>{a.name}</td>
          <td className='px-10'>{a.adm_no}</td>
          <td className='px-10'>{a.course_id}</td>
          <td className='px-10'>{a.class_name}</td>
          <td><Link to="/edit"state={{a}}><i class="fa fa-edit" id="fa2" ></i></Link></td>
          <td> <i className="fa fa-trash-o" id="fa" onClick={()=>handleDelete(a.id)}></i></td>
        </tr>
            )
          })}
         </table>
  </div>
  );
};
 export default Dashboard;