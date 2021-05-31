import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//create your first component
export function Home() {
	const [color, setColor] = useState("bg-danger");
	return (
		<Container className="location pt-0">
			<Row>
				<Col
					xs={{ span: 7, offset: 5 }}
					className="stick bg-dark"></Col>
			</Row>
			<Row>
				<Col xs={5}></Col>
				<Col xs={2} className="location bg-dark square rounded-3">
					<Row>
						<Col xs={1}></Col>
						<Col
							xs={1}
							onClick={() => setColor("bg-danger")}
							className={
								"light bg-danger " +
								(color === "bg-danger" ? "glow" : "")
							}></Col>
					</Row>
					<Row>
						<Col xs={1}></Col>
						<Col
							xs={1}
							onClick={() => setColor("bg-warning")}
							className={
								"light bg-warning " +
								(color === "bg-warning" ? "glow" : "")
							}></Col>
					</Row>
					<Row>
						<Col xs={1}></Col>
						<Col
							xs={1}
							onClick={() => setColor("bg-success")}
							className={
								"light bg-success " +
								(color === "bg-success" ? "glow" : "")
							}></Col>
					</Row>
				</Col>
				<Col xs={5}></Col>
			</Row>
		</Container>
	);
}
