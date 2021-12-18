import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faPlay, faPause, faRedoAlt} from '@fortawesome/free-solid-svg-icons';


const ArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />
const ArrowDownIcon = <FontAwesomeIcon icon={faArrowDown} />
const StartIcon = <FontAwesomeIcon icon={faPlay} />
const PauseIcon = <FontAwesomeIcon icon={faPause} />
const ResetIcon = <FontAwesomeIcon icon={faRedoAlt} />


const Dashboard = () => {
	return (
		<section>
			<Card className="" id="App-Card">
				<Card.Header id="timer-label">sesLabel</Card.Header>
				<Card.Body>
					<Card.Text id="time-left">state</Card.Text>
				</Card.Body>
				<Card.Footer className="flex-nowrap p-0">
					<Button className="col-4 m-0 rounded-0 Card-Btn" id="start_stop"> {StartIcon} 
						<span className='ps-1'>Start</span>
					</Button>

					<Button className="col-4 m-0 rounded-0 Card-Btn" id="pause"> {PauseIcon} 
						<span className='ps-1'>Pause</span> 
					</Button>

					<Button className="col-4 m-0 rounded-0 Card-Btn" id="reset"> {ResetIcon} 
						<span className='ps-1'>Reset</span>
					</Button>
				</Card.Footer>
			</Card>

			<div class="mx-auto m-3" id="Settings">
				<Row>
					<Col md={6}>
						<div className="mb-3" >
							<p id="session-label">Work Time</p>
							<Button className="me-2" id="session-increment"> {ArrowUpIcon} </Button> 
							<span id="session-length">workTime</span> 
							<Button className="ms-2" id="session-decrement" >{ArrowDownIcon}</Button>
						</div>
						
					</Col>

					<Col md={6}>
						<div className="mb-3" >
							<p id="break-label">Break Time</p>
							<Button className="me-2" id="break-increment"> {ArrowUpIcon} </Button> 
							<span id="break-length">breakTime</span> 
							<Button className="ms-2" id="break-decrement">{ArrowDownIcon}</Button>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}


const Pomodoro = () => {
	return (
		<div className="App-Div text-center">
			<h1 className='display-1'>Pomodoro App</h1>
			<h2 className="display-6"> 25 + 5 Time Management Clock </h2>

			<Dashboard />
		</div>
	);
}

const App = () => {
	return (
		<Container fluid id="App-Container">
			<Pomodoro />
		</Container>
	);
}

export default App;
