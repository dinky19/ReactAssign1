import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import EmployeForm from './employeForm';
class Tab extends Component { 
    state = { 
        employe:[{EmployeName:"Abc",EmployeeJob:"Dev"}]
     }
     addElement =()=>{
      this.renderEmploye(this.state.employe)
      let empName=document.getElementById('formEmpName').value;
      let empJob=document.getElementById('formEmpJob').value;
      let empObject = {EmployeName : empName,EmployeeJob:empJob};
      this.state.employe.push(empObject); 
      this.setState(this.state.employe);      
 }
 removeBtn =(index)=>{ 
  const employe=this.state.employe;
  employe.splice(index,1)
  this.setState({employe:employe});
}
 renderEmploye = (empl,index)=>{
     return(  <tr>
     <td>{empl.EmployeName}</td>
     <td>{empl.EmployeeJob}</td>
     <td>{<ReactBootStrap.Button variant="danger" size="sm" onClick={this.removeBtn.bind(this,index)} >Remove</ReactBootStrap.Button>}</td>
     </tr>
     )
 }
    render() { 
        return (<div>
            <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Job</th>
              </tr>
            </thead>
            <tbody>
            {this.state.employe.map(this.renderEmploye)}
            </tbody>
          </ReactBootStrap.Table>
          <EmployeForm click={this.addElement}/>
          </div>
           );
    }
}

export default Tab;
