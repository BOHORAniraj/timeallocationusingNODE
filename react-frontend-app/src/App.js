import { useState ,useEffect } from 'react';
import { Container, Row, Col, Alert, Button,Spinner } from "react-bootstrap";
import { AddTaskForm } from "./components/form/AddTaskForm";

import { TaskList } from "./components/task-lists/TaskList";
import { NotToDoList } from "./components/task-lists/NotToDoList";
import {  switchTask } from './apis/taskApi'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskLists , handleOnDeleteItems} from './components/task-lists/taskAction'
import { setTaskToDelete } from "./components/task-lists/taskSlice";

import "./App.css";

import { AlertMessage } from "./components/message/AlertMessage";
import { isPending } from "@reduxjs/toolkit";


const App = () => {
	const dispatch = useDispatch();
	const { isPending, totalHrs, taskToDelete } = useSelector(state => state.task);
	

	useEffect(() => {
		// fetch all the ticket and set in the task
		
			dispatch(fetchTaskLists());
		
	},[]);
	

	const handleOnTaskClicked = e => {
	dispatch(setTaskToDelete(e.target))
	}
//  const markAsBadList = async _id => {
		
//     const dt = {
        
//         id : _id,
//         todo : false,
        
//     }
    
        

// }
//  const markAsGoodList = async (_id) => {
    
//     const dt = {
        
//         id : _id,
//         todo : true,
        
//     }
//     const res = await switchTask(dt);
    
// }



	


	return (
		<div className="main">
			<Container>
				<Row>
					<Col>
						<h1 className="text-center mt-5">Not To Do Task List</h1>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<AlertMessage />						
					</Col>
				</Row>
				<AddTaskForm  />
				<hr />
				<Row>
					<Col>
						{isPending && <Spinner animation = "border" variant ="primary"/>}
						<TaskList/>
					</Col>
					<Col>
						<NotToDoList/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant = "danger" onClick={()=>dispatch(handleOnDeleteItems(taskToDelete))}
						>
							Delete
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Alert variant="info">
							Your total allocated hours = {totalHrs} / 168 hours per week
						</Alert>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default App;
