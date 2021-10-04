
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = (props) => {
    const { courseName, img, description } = props.crouse;
    return (
        <div>
            <CardGroup >
                <Card style={{ height: 600, marginTop: 20, border: "1px solid white" }}>
                    <Card.Img style={{ height: 300 }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button style={{ backgroundColor: 'yellowgreen', padding: 15, border: "1px solid white", borderRadius: 10 }}>Enroll Now</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;