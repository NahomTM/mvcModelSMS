// import axios from "axios";
// import React from "react";
// import { useState, useEffect } from "react";

// function AddClass() {
//     const [className, setClassName] = useState('');
//     const [instructorList, setInstructorList] = useState([]);
//     const [selectedInstructor, setSelectedInstructor] = useState('');
//     const [courseList, setCourseList] = useState([]);
//     const [selectedCourse, setSelectedCourse] = useState('');
//     useEffect(() => {
//         axios.post('http://localhost:4000/fetchInfo/findCourse').then((res) => {
//             if (res.data.success === false) {
//                 console.log("No courses assigned")
//             }
//             else {
//                 setCourseList(res.data)
//             }
//         })
//     }, []);

//     const handleSubmit = () => {
//         axios.post('http://localhost:4000/register/classReg', { className, selectedInstructor, selectedCourse });
//     }

//     const handleInstructorChange = (e) => {
//         setSelectedInstructor(e.target.value)
//     }

//     const handleCourseChange = (e) => {

//         setSelectedCourse(e.target.value)
//         axios.post('http://localhost:4000/fetchInfo/findInstructor', {selectedCourse}).then((res) => {
//             if (res.data.success === false) {
//                 console.log("No instructor assigned")
//             }
//             else{
//                 setInstructorList(res.data)
//             }
//         })
//         return (
//             <div>
//                 <form>
//                     <span>Instructor</span>
//                     <select name="" id="" value={selectedInstructor} onChange={handleInstructorChange}>
//                         {instructorList.map((instructorName, index) => (
//                             <option key={index} value={instructorName}>{instructorName}</option>
//                         ))}
//                     </select>
//                     <input type="submit" onSubmit={handleSubmit} value="Submit" />
//                 </form>
//             </div>
//         )

//     }

//     const renderFirst = () => {

//         return (
//             <div>
//                 <form action="">
//                     <span>Class Name:</span>
//                     <input type="text" value={className} onChange={(e) => { setClassName(e.target.value) }} />
//                     <span>Course</span>
//                     <select name="" id="" value={selectedCourse} onChange={handleCourseChange}></select>
//                     {courseList.map((courseName, index) => (
//                             <option key={index} value={courseName}>{courseName}</option>
//                         ))}
//                 </form>
//             </div>
//         )

//     }
//     return (
//         <div>
//             <div>{renderFirst()}</div>
//             <div>{handleCourseChange()}</div>
//         </div >
//     )
// }

// export default AddClass

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function AddClass() {
  const [className, setClassName] = useState("");
  const [instructorList, setInstructorList] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    axios.post("http://localhost:4000/fetchInfo/findCourse").then((res) => {
      if (res.data.success === false) {
        console.log("No courses assigned");
      } else {
        setCourseList(res.data);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSub called")
    axios
      .post("http://localhost:4000/register/classReg", {
        className,
        selectedInstructor,
        selectedCourse,
      })
      .then((res) => {
        console.log(res);
        alert("Successfully added")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInstructorChange = (e) => {
    setSelectedInstructor(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    axios
      .post("http://localhost:4000/fetchInfo/findInstructor", {
        selectedCourse,
      })
      .then((res) => {
        if (res.data.success === false) {
          console.log("No instructor assigned");
        } else {
          setInstructorList(res.data);
        }
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <span>Class Name:</span>
          <input
            type="text"
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
            }}
          />
          <span>Course</span>
          <select
            name=""
            id=""
            value={selectedCourse}
            onChange={handleCourseChange}
          >
            <option value="">Select</option>
            {courseList.map((courseName, index) => (
              <option key={index} value={courseName.fullIdentification}>
                {courseName.fullIdentification}
              </option>
            ))}
          </select>
          <span>Instructor</span>
          <select
            name=""
            id=""
            value={selectedInstructor}
            onChange={handleInstructorChange}
          >
            <option value="">Select</option>
            {instructorList.map((instructorName, index) => (
              <option key={index} value={instructorName.fullIdentification}>
                {instructorName.fullIdentification}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddClass;
