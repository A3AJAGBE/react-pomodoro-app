import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const App = () => {
	return (
		<Container fluid id="App-Container">
			
			<div className="App-Div text-center">
				<h1>Pomodoro App</h1>
				<span className="lead"> 25 + 5 Time Management Clock </span>

				<Card className="" id="App-Card">
					<Card.Header>Session</Card.Header>
					<Card.Body>
						
						<Card.Text>
							00 : 00
						</Card.Text>
						
					</Card.Body>
					<Card.Footer className="text-muted">
						<ButtonGroup size="lg" className="d-grid gap-2 d-md-block">
							<Button variant="dark">Left</Button>
							<Button variant="danger">Middle</Button>
							<Button variant="warning">Right</Button>
						</ButtonGroup>
					</Card.Footer>
				</Card>
			</div>
		</Container>
	);
}

export default App;
