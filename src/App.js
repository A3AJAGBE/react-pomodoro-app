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

const timeFormat = (num) => {
	let minutes = Math.floor(num / 60);
	let seconds = num % 60;

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	return `${minutes}:${seconds}`;
}

const MAX = 60;
const MIN = 1;

const Dashboard = () => {
	const [timerLabel, setTimerLabel] = useState("App Session");
	const [workTime, setWorkTime] = useState(25);
	const [breakTime, setBreakTime] = useState(5);
	const [timeLeft, setTimeLeft] = useState(timeFormat(workTime * 60));
	
	const incWorkTime = () => {
		let workLength = workTime;
		if (workLength < MAX) {
			workLength += 1;
		} else {
			setTimerLabel("Maximum time is 60 minutes");
		}
		setWorkTime(workLength);
		setTimeLeft(timeFormat(workLength * 60));
		setTimerLabel("Increasing Work Time");
	}

	const decWorkTime = () => {
		let workLength = workTime;
		if (workLength > MIN) {
			workLength -= 1;
		} else {
			setTimerLabel("Minimum time is 1 minute");
		}
		setWorkTime(workLength);
		setTimeLeft(timeFormat(workLength * 60));
		setTimerLabel("Decreasing Work Time");
	}

	const incBreakTime = () => {
		let breakLength = breakTime;
		if (breakLength < MAX) {
			breakLength += 1;
		} else {
			setTimerLabel("Maximum time is 60 minutes");
		}
		setBreakTime(breakLength);
		setTimerLabel("Increasing Break Time");
	}

	const decBreakTime = () => {
		let breakLength = breakTime;
		if (breakLength > MIN) {
			breakLength -= 1;
		} else {
			setTimerLabel("Minimum time is 1 minute");
		}
		setBreakTime(breakLength);
		setTimerLabel("Decreasing Break Time");
	}
	

	return (
		<section>
			<Card className="" id="App-Card">
				<Card.Header id="timer-label"> {timerLabel} </Card.Header>
				<Card.Body>
					<Card.Text id="time-left"> {timeLeft} </Card.Text>
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
							<Button className="me-2" id="session-increment" onClick={incWorkTime}> {ArrowUpIcon} </Button> 
							<span id="session-length">{workTime}</span> 
							<Button className="ms-2" id="session-decrement" onClick={decWorkTime}>{ArrowDownIcon}</Button>
						</div>
						
					</Col>

					<Col md={6}>
						<div className="mb-3" >
							<p id="break-label">Break Time</p>
							<Button className="me-2" id="break-increment" onClick={incBreakTime}> {ArrowUpIcon} </Button> 
							<span id="break-length">{breakTime}</span> 
							<Button className="ms-2" id="break-decrement" onClick={decBreakTime}>{ArrowDownIcon}</Button>
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
