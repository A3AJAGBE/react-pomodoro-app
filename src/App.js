import './App.css';
import React from 'react';
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

const Session = (props) => {
	return (
		<Col md={6}>
			<div className="mb-3" >
				<p>{props.SessionName}</p>
				<Button className="me-2" onClick={props.increaseClicked}>{ArrowUpIcon}</Button> 
				<span>{props.SessionNameTime}</span> 
				<Button className="ms-2" onClick={props.decreaseClicked}>{ArrowDownIcon}</Button>
			</div>
		</Col>
	);
}

class Dashboard extends React.Component {

	state = {
		workDefault: 25,
		breakDefault: 5
	}
	
	render() {
		const {workDefault, breakDefault} = this.state;

		const workSessionProps = {
			SessionName: "Work Settings",
			SessionNameTime: workDefault,
			increaseClicked: this.workIncreaseClicked,
			decreaseClicked: this.workDecreaseClicked
		}

		const breakSessionProps = {
			SessionName: "Break Settings",
			SessionNameTime: breakDefault,
			increaseClicked: this.breakIncreaseClicked,
			decreaseClicked: this.breakDecreaseClicked
		}

		return (
			<section>
				<Card id="App-Card">
					<Card.Header id="timer-label"> timerLabel </Card.Header>
					<Card.Body>
						<Card.Text id="time-left"> timeLeft </Card.Text>
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
						<Session {...workSessionProps} />
						<Session {...breakSessionProps} />
					</Row>
				</div>
			</section>
		);
	}
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
