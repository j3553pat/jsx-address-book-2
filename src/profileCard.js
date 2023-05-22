import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProfileInfo(props) {
    const {firstName, lastName, age, dob, pic, cell, email, gender, showDetails, visibleInfo} = props
    console.log(showDetails)
    return (
      <Card style={{ width: '25rem', backgroundColor:"#70b382",
         borderRadius: 15, margin:10, padding: 10 }}>
        <Card.Img style={{borderRadius: 10}}
          variant="top" src= {pic}/>
        <Card.Body>
          <Card.Title style={{fontSize: 25, fontFamily: "fantasy"}}>
            {firstName} {lastName}
            </Card.Title>
          <Card.Text>
        {showDetails && 
        <p>
            Gender: {gender}
          <br />
            Age: {age}
          <br />
            DOB: {dob.slice(0,9)}
          <br />
            #: {cell}
          <br />
            email: {email}
        </p> }
          </Card.Text>
          {!showDetails ? <Button variant="primary" onClick={visibleInfo}>Show Details</Button>:<Button variant="primary" onClick={visibleInfo}>hide Details</Button> }
        </Card.Body>
      </Card>
    )
  }
  
  export default ProfileInfo;