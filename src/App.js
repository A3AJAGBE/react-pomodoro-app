import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faPlay, faPause, faRedoAlt} from '@fortawesome/free-solid-svg-icons';

const ArrowUp = <FontAwesomeIcon icon={faArrowUp} />
const ArrowDown = <FontAwesomeIcon icon={faArrowDown} />
const Start = <FontAwesomeIcon icon={faPlay} />
const Pause = <FontAwesomeIcon icon={faPause} />
const Reset = <FontAwesomeIcon icon={faRedoAlt} />

let workLength = 25;
let breakLength = 5;

const timeFormat = (n) => {
	let num = n * 60; //number in seconds.

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

const App = () => {
	const [breakTime, setBreakTime] = useState(String(breakLength));
	const [workTime, setWorkTime] = useState(String(workLength));
	const [state, setState] = useState(timeFormat(workTime));

	const incWorkTime = (e) => {
		if (workLength > 59) {
			return;
		} else {
			workLength++;
		}
		setWorkTime(String(workLength));
		setState(timeFormat(workLength));
	}

	const decWorkTime = (e) => {
		if (workLength <= 1) {
			return;
		} else {
			workLength--;
		}
		setWorkTime(String(workLength));
		setState(timeFormat(workLength));
	}

	const incBreakTime = (e) => {
		if (breakLength > 59) {
			return;
		} else {
			breakLength++;
		}
		setBreakTime(String(breakLength));
	}

	const decBreakTime = (e) => {
		if (breakLength <= 1) {
			return;
		} else {
			breakLength--;
		}
		setBreakTime(String(breakLength));
	}

	// const countdown = count => {
	// 	setState(() => {
	// 		if (count > 0) {
	// 			count -= 1;
	// 		}
	// 	}, 1000);
	// }

	// const startSession = () => {
	// 	let timerRepeat = repeat;
	// 	timerRepeat += 1;
	// 	let workSecs = Number(workTime) * 60;
	// 	let breakSecs = breakTime * 60;

	// 	if (timerRepeat % 2 === 0) {
	// 		countdown(breakSecs);
	// 	} else {
	// 		countdown(workSecs);
	// 	}
	// }

	// TODO: update
	const reset = () => {
		let workLength = 25;
		let breakLength = 5;
		setState(workLength);
		setWorkTime(workLength);
		setBreakTime(breakLength);
	}


	return (
		<Container fluid id="App-Container">
			
			<div className="App-Div text-center">
				<h1 className='display-1'>Pomodoro App</h1>
				<h2 className="display-6"> 25 + 5 Time Management Clock </h2>

				<Card className="" id="App-Card">
					<Card.Header id="timer-label">Session</Card.Header>
					<Card.Body>
						
						<Card.Text id="time-left">
							{state}
						</Card.Text>
						
					</Card.Body>
					<Card.Footer className="flex-nowrap p-0">
						<Button className="col-4 m-0 rounded-0 Card-Btn" id="start_stop">{Start} <span className='ps-1'>Start</span></Button>

						<Button className="col-4 m-0 rounded-0 Card-Btn" id="pause">{Pause} <span className='ps-1'>Pause</span> </Button>

						<Button className="col-4 m-0 rounded-0 Card-Btn" id="reset" onClick={reset}>{Reset} <span className='ps-1'>Reset</span></Button>

					</Card.Footer>
				</Card>

				<div class="mx-auto m-3" id="Settings">
					<Row>
						<Col md={6}>
							<div className="mb-3" >
								<p id="session-label">Work Time</p>
								<Button className="me-2" id="session-increment" onClick={incWorkTime}> {ArrowUp} </Button> <span id="session-length">{workTime}</span> <Button className="ms-2" id="session-decrement" onClick={decWorkTime}>{ArrowDown}</Button>
							</div>
							
						</Col>

						<Col md={6}>
							<div className="mb-3" >
								<p id="break-label">Break Time</p>
								<Button className="me-2" id="break-increment" onClick={incBreakTime}> {ArrowUp} </Button> <span id="break-length">{breakTime}</span> <Button className="ms-2" id="break-decrement" onClick={decBreakTime}>{ArrowDown}</Button>
							</div>
						</Col>
					</Row>
				</div>

			</div>
		</Container>
	);
}

export default App;
