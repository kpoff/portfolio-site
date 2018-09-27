import React from 'react';

const education = () => {
  const myEducation = [
    {
        schoolName:"Ironhack",
        city: "Miami",
        state: "FL",
        degree:"Full-Stack Web Developer",
        schoolStarted:"2018",
        schoolEnded:"2018"
    },
    {
        schoolName:"Palm Beach State University",
        city: "Lake Worth",
        state: "FL",
        degree:"Technical Certificate in Computer Programming",
        schoolStarted:"2016",
        schoolEnded:"2017"
    },
    {
        schoolName:"Boston University",
        city: "Boston",
        state: "MA",
        degree:"BSBA with concentrations in Finance and Accounting",
        minorStudy: "Spanish Language and Literature",
        schoolStarted:"2003",
        schoolEnded:"2007"
    }
  ]

  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3>{eachSchool.schoolName}</h3>
            <p>{eachSchool.city}, {eachSchool.state}</p>
            <h4>{eachSchool.degree}</h4>
            <h4>{eachSchool.minorStudy}</h4>
            <p>{eachSchool.schoolStarted} - {eachSchool.schoolEnded}</p>
          </div>
          )
      })}
    </div>
  )
}

export default education;