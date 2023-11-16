import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './ListEmployeeComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import SearchItem from './SearchItem';


function Content(){

return(
<div className="container"  >
      <Router>
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> 
                          <Route path = "/search" component = {SearchItem}></Route> 
                    </Switch>
                    </Router>
                </div>
)
}
export default Content;