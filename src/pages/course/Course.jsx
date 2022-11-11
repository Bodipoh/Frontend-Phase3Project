import "./course.css"
import React, { useState } from "react";

function User() {
  const [coursename, setCoursename] = useState("");
  const [usermonths, setMonths] = useState("");
  const [userfees, setUserfees] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");


  const handlecoursename = (event) => {
    const course_name = event.target.value;
    setCoursename(course_name);
  };

  const handleusermonths = (event) => {
    const user_months = event.target.value;
    setMonths(user_months);
  };

  const handleuserfees = (event) => {
    const user_fees = event.target.value;
    setUserfees(user_fees);
  };

  const handledescription = (event) => {
    const user_description = event.target.value;
    setDescription(user_description);
  };

   const handletechnology = (event) => {
    const user_tech = event.target.value;
    setTechnology(user_tech);
  };

   const handletype = (event) => {
    const user_type = event.target.value;
    setType(user_type);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      course_name: coursename,
      user_months: usermonths,
      user_fees: userfees,
      user_descrip: description, 
      user_tech: technology,
      user_type: type,

    };

    fetch
      .post("http://localhost:9292/courses", JSON.stringify(userdata))
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };
  return (

    <React.Fragment>
      <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="course"> Course Registration </h2>
            <br></br>

           {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}

            <form onSubmit={submitUser} className="row g-3">
              <div className="col-md-3">
                <label className="form-label"> Course Name </label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  onChange={(e) => handlecoursename(e)}
                />
              </div>

              <br></br>

              <div className="col-md-3">
                <label className="form-label">No of Months </label>
                <input
                  type="text"
                  name="user_months"
                  className="form-control p-2"
                  onChange={(e) => handleusermonths(e)}
                />
              </div>

              <br></br>

              <div className="col-md-3">
                <label className="form-label"> Course Fee </label>
                <input
                  type="text"
                  name="user_fees"
                  className="form-control p-2"
                  onChange={(e) => handleuserfees(e)}
                />
              </div>

              <br></br>

<div className="col-md-3">
                <label className="form-label"> Description </label>
                <input
                  type="text"
                  name="user_fees"
                  className="form-control p-2"
                  onChange={(e) => handledescription(e)}
                />
              </div>

<br></br>

<div className="col-md-3">
                <label className="form-label"> Technology </label>
                <input
                  type="text"
                  name="user_tech"
                  className="form-control p-2"
                  onChange={(e) => handletechnology(e)}
                />
              </div>

              <br></br>

<div className="col-md-3">
                <label className="form-label"> Course Type </label>
                <input
                  type="text"
                  name="user_type"
                  className="form-control p-2"
                  onChange={(e) => handletype(e)}
                />
              </div>

              <br></br>

              <div className="col-md-3">
                <button type="submit" className="butn btn-primary mt-4">
                  Register
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
