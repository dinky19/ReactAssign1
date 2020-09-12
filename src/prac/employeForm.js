import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
var EmployeForm=(props)=>{
    return(
        <ReactBootStrap.Form>
  <ReactBootStrap.Form.Group controlId="formEmpName">
    <ReactBootStrap.Form.Label>EName</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="text" placeholder="Enter name" />
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Group controlId="formEmpJob">
    <ReactBootStrap.Form.Label>EJob</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="text" placeholder="Enter job" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Button variant="success" type="button" onClick={props.click}  >
    Submit
  </ReactBootStrap.Button>
</ReactBootStrap.Form>
    )
}
export default EmployeForm;
