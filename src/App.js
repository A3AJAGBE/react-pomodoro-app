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

const alarm = document.getElementById("beep");

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
				<p id={`${props.idName}-label`}>{props.SessionName}</p>

				<Button id={`${props.idName}-increment`} className="me-2" onClick={props.increaseClicked}>{ArrowUpIcon}</Button> 

				<span id={`${props.idName}-length`}>{props.SessionNameTime}</span> 
				
				<Button id={`${props.idName}-decrement`} className="ms-2" onClick={props.decreaseClicked}>{ArrowDownIcon}</Button>
			</div>
		</Col>
	);
}
class Dashboard extends React.Component {

	constructor(props){
		super(props);
		this.interval = undefined;
	}

	state = {
		workDefault: 25,
		breakDefault: 5,
		timeLeft: 25 * 60,
		timerLabel: "App Session",
		inProgress: false
	}

	startPauseClicked = () => {
		const {inProgress} = this.state;

		if (inProgress) {
			clearInterval(this.interval);
			this.setState({
				inProgress: false,
				timerLabel: "Session Paused"
			});
		} else {
			this.setState({
				inProgress: true,
				timerLabel: "Session in Progress"
			});
			this.interval = setInterval(() => {
				const {timeLeft, 
					timerLabel, 
					breakDefault, 
					workDefault} = this.state;

				// Switching from work to break time when the timeleft gets to 0. 
				if(timeLeft === 0) {
					this.setState({
						timerLabel: (timerLabel === "Session in Progress") ? "On Break" : "Session in Progress",

						timeLeft: (timerLabel === "Session in Progress") ? (breakDefault * 60): (workDefault * 60)
					});

					alarm.play()
				} else {
					this.setState({
						timeLeft: timeLeft - 1
					});
				}
			}, 1000);
		}
		
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	resetClicked = () => {
		this.setState({
			workDefault: 25,
			breakDefault: 5,
			timeLeft: 25 * 60,
			timerLabel: "App Session",
			inProgress: false
		});

		clearInterval(this.interval);
		alarm.pause();
		alarm.currentTime = 0;
	}

	workIncreaseClicked = () => {
		const {workDefault, inProgress} = this.state;

		if (!inProgress) {
			if (workDefault < 60) {
				this.setState({
					workDefault: workDefault + 1,
					timeLeft: (workDefault + 1) * 60
				});
			}
		}
	}

	workDecreaseClicked = () => {
		const {workDefault, inProgress} = this.state;

		if (!inProgress) {
			if (workDefault > 1) {
				this.setState({
					workDefault: workDefault - 1,
					timeLeft: (workDefault - 1) * 60
				});
			}
		}
	}

	breakIncreaseClicked = () => {
		const {breakDefault, inProgress} = this.state;

		if (!inProgress) {
			if (breakDefault < 60) {
				this.setState({
					breakDefault: breakDefault + 1
				});
			}
		}
	}

	breakDecreaseClicked = () => {
		const {breakDefault, inProgress} = this.state;

		if (!inProgress) {
			if (breakDefault > 1) {
				this.setState({
					breakDefault: breakDefault - 1
				});
			}
		}
	}

	render() {
		const {workDefault, breakDefault, timeLeft, timerLabel, inProgress} = this.state;

		const workSessionProps = {
			SessionName: "Work Settings",
			SessionNameTime: workDefault,
			increaseClicked: this.workIncreaseClicked,
			decreaseClicked: this.workDecreaseClicked,
			idName: "session"
		}

		const breakSessionProps = {
			SessionName: "Break Settings",
			SessionNameTime: breakDefault,
			increaseClicked: this.breakIncreaseClicked,
			decreaseClicked: this.breakDecreaseClicked,
			idName: "break"
		}

		return (
			<section>
				<Card id="App-Card" className='mx-auto'>
					<Card.Header id="timer-label" className='fs-3'> 
						<div className='timerBG'>
							{timerLabel} 
						</div>
					</Card.Header>
					<Card.Body>
						<Card.Text id="time-left" className='display-4'> {timeFormat(timeLeft)} </Card.Text>
					</Card.Body>
					<Card.Footer className="flex-nowrap p-0">
						<Button className="col-6 m-0 rounded-0 Card-Btn" id="start_stop" onClick={this.startPauseClicked}> 
							{StartIcon}{PauseIcon}
							<span className='ps-1 fs-5'>
								{`${inProgress ? "Pause" : "Start"}`}
							</span>
						</Button>
		
						<Button className="col-6 m-0 rounded-0 Card-Btn" id="reset" onClick={this.resetClicked}> {ResetIcon} <span className='ps-1 fs-5'> Reset</span>
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
