import React from 'react';
import './Promo.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Promo extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<div class="iconcontainer first">
					<img class="homeicons1" src="https://ibb.co/LZk0HgG" />
					<p>I want this under first image</p>
				</div>
				<div class="iconcontainer second">
					<img class="homeicons1" src="https://ibb.co/LZk0HgG" />
					<p>I want this under second image</p>
				</div>
				{/* <Row>
					<Col>
						video1
						<img src="src\main\resources\static\img\example.JPG" />
					</Col>
					<Col>text1</Col>
				</Row>
				<Row>
					<Col>text2</Col>
					<Col>
						video2<img src="src\main\resources\static\img\example.JPG" />
					</Col>
				</Row>
				<Row>
					<Col>
						video3<img src="src\main\resources\static\img\example.JPG" />
					</Col>
					<Col>text3</Col>
				</Row>
				<Row>
					<Col>text4</Col>
					<Col>
						video4<img src="src\main\resources\static\img\example.JPG" />
					</Col>
				</Row> */}
			</div>
		);
	}
}

export default Promo;
