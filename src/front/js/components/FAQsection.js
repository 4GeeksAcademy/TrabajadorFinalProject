import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import '../../styles/FAQ.css';

const FAQSection = () => {
  return (
    <Container className='faqcontainer'>
      <Accordion id="accordion" defaultActiveKey="0">
        <Card>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Heading-One</Accordion.Header>
            <Accordion.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum diam.
                Pellentesque vitae metus vitae massa egestas posuere. Mauris ultricies vehicula
                tempor. Pellentesque justo turpis, blandit nec ex eu, tempus placerat diam. Morbi a
                felis commodo eros consectetur rhoncus sed eget lectus. Praesent non erat vehic.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Heading-Two</Accordion.Header>
            <Accordion.Body>
              <p>
                Pellentesque justo turpis, blandit nec ex eu, tempus placerat diam. Morbi a felis
                commodo eros consectetur rhoncus sed eget lectus, posuere massa id, ultricies est.
                Pellentesque sit amet venenatis est, quis posuere ipsum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Heading-Three</Accordion.Header>
            <Accordion.Body>
              <p>
                Nulla vitae ipsum diam. Pellentesque vitae metus vitae massa egestas posuere justo
                turpis, blandit nec ex eu, tempus placerat diam. Morbi a felis commodo eros
                consectetur rhoncus sed eget lectus. Praesent non erat vehicula, posuere massa id,
                ultricies est. Pellentesque sit amet venenatis est, quis posuere ipsum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        
        <Card>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Heading-Four</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Four
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Heading-Five</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Five
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Heading-Six</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Six
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Heading-Seven</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Seven
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Heading-Eight</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Eight
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Heading-Nine</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Nine
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        <Card>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Heading-Ten</Accordion.Header>
            <Accordion.Body>
              <p>
                Content for Heading-Ten
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Accordion>
    </Container>
  );
}

export default FAQSection;
