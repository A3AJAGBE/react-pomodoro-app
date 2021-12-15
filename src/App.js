import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
	return (
		<Container fluid id="App-Container">
			
			<div className="App-Div text-center">
				<h1>Pomodoro App</h1>
				<span className="lead"> 25 + 5 Time Management Clock </span>

				<Card className="" id="App-Card">
					<Card.Header id="timer-label">Session</Card.Header>
					<Card.Body>
						
						<Card.Text id="time-left">
							25:00
						</Card.Text>
						
					</Card.Body>
					<Card.Footer className="flex-nowrap p-0">
						<Button className="col-4 m-0 rounded-0 Card-Btn" id="start_stop">Start</Button>

						<Button className="col-4 m-0 rounded-0 Card-Btn" id="reset">Reset</Button>

						<Button className="col-4 m-0 rounded-0 Card-Btn" id="stop">Stop</Button>
					</Card.Footer>
				</Card>

				<div class="mx-auto m-3" id="Settings">
					<Row>
						<Col md={6}>
							<div className="mb-3" >
								<p id="session-label">Work Time</p>
								<Button className="me-2" id="session-increment">⬆</Button> <span id="session-length">25</span> <Button className="ms-2" id="session-decrement">⬇️</Button>
							</div>
							
						</Col>

						<Col md={6}>
							<div className="mb-3" >
								<p id="break-label">Break Time</p>
								<Button className="me-2" id="break-increment">⬆</Button> <span  id="break-length">5</span> <Button className="ms-2" id="break-decrement">⬇️</Button>
							</div>
						</Col>
					</Row>
				</div>

			</div>
		</Container>
	);
}

export default App;
