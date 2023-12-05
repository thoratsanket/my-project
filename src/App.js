import './App.css';
import Student from './components/Student';
import Youtube from './components/youtube/Youtube';

function App() {

  let myStudentList = [
    {
      name: 28,
      dob: "29/11/2000",
      city: "Pune"
    },
    {
      name: "Vinayak",
      dob: "15/10/2001",
      city: 9123456789
    },
    {
      name: "Shweta",
      dob: "17/10/2001",
      city: "Nagpur"
    },
    {
      name: "",
      dob: "",
      city: ""
    },

  ]

  return (
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    //   {
    //     myStudentList.map(student => (
    //       <Student
    //         name={student.name}
    //         dob={student.dob}
    //         city={student.city}

    //       />
          
        
    //     ))
    //   }

    // </div>
    <>
    <Youtube/>
    </>

  );
}

export default App;
