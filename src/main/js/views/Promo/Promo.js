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
				<div>
					<div class="iconcontainer first">
						<iframe
							class="leftimage"
							width="1280"
							height="721"
							src="https://www.youtube.com/embed/vup0K8x4iKQ"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
						{/* <img class="leftimage" src="https://i.ibb.co/fx1XLNc/CHUCKPC-WIN-20141026-205403.jpg" /> */}
						{/* <p>I want this under first image</p> */}
					</div>
					<div class="iconcontainer second">
						{/* <img class="homeicons1" src="https://ibb.co/LZk0HgG" /> */}
						<p class="right">Team text here</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						{/* <img class="homeicons1" src="https://ibb.co/LZk0HgG" /> */}
						<p class="left">Team text here</p>
					</div>
					<div class="iconcontainer second">
						<iframe
							class="rightimage"
							width="1280"
							height="721"
							src="https://www.youtube.com/embed/vup0K8x4iKQ"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>

						{/* <img class="rightimage" src="https://i.ibb.co/fx1XLNc/CHUCKPC-WIN-20141026-205403.jpg" /> */}
						{/* <p>I want this under second image</p> */}
					</div>
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
