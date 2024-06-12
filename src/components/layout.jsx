import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faDivide, faMinus, faPlus, faTimes, faPercentage } from '@fortawesome/free-solid-svg-icons';
import { evaluate } from 'mathjs';

const Layout = () => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key } = event;
      // eslint-disable-next-line
      if (/\d|\+|\-|\*|\/|\./.test(key)) {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        backspace();
      } else if (key === 'Esc') {
        clearDisplay();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [display]);

  // eslint-disable-next-line
  const appendToDisplay = (value) => {
    // Validations
    if (value === 'C') {
      clearDisplay();
      return;
    }
  
    if (value === '.') {
      const lastPart = display.split(/[+\-*/]/).pop();
      if (lastPart.includes('.')) return; // Avoid continuous repetition of '.'
      if (!display.length || /[+\-*/]/.test(display[display.length - 1])) {
        // Add '0' before '.' if no digit before it
        setDisplay(prevDisplay => prevDisplay + '0' + value);
        return;
      }
    }
  
    // Check if the value is an operator
    const isOperator = /[+\-*/%]/.test(value);
  
    // Check if the display is empty
    if (!display.length) {
      // Do not allow operators at the beginning
      if (isOperator) return;
      // Update display with the value
      setDisplay(prevDisplay => prevDisplay + value);
      return;
    }
  
    // Check if the last character of display is an operator
    const lastCharIsOperator = /[+\-*/%]/.test(display[display.length - 1]);
  
    // If the last character is an operator and the current value is an operator,
    // replace the last character with the current value
    if (lastCharIsOperator && isOperator) {
      setDisplay(prevDisplay => prevDisplay.slice(0, -1) + value);
      return;
    }
  
    // Update display with the value
    setDisplay(prevDisplay => prevDisplay + value);
  };
  
  const clearDisplay = () => {
    setDisplay('');
  };

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  // eslint-disable-next-line
  const calculate = () => {
    try {
      const result = evaluate(display);
      if (isNaN(result) || !isFinite(result)) {
        setDisplay('Error');
      } else {
        setDisplay(result.toString());
      }
    } catch {
      setDisplay('Error');
    }
  };

  // const handleKeydown = (event) => {
  //   const { key } = event;
  //   // eslint-disable-next-line
  //   if (/\d|\+|\-|\*|\/|\./.test(key)) {
     
  //     appendToDisplay(key);
  //   } else if (key === 'Enter') {
  //     calculate();
  //   } else if (key === 'Backspace') {
  //     backspace();
  //   } else if (key === 'Esc') {
  //     clearDisplay();
  //   }
  // };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Col xs={12} md={6} xl={4} onKeyDown={handleKeydown} className="text-center border p-4 border-black">

            <Row>
            <Col xs={12}><input type="text" value={display} readOnly className="display text-end w-100 mb-3 border-black" style={{height: "75px"}}/></Col>
            </Row>
            <Row >
              <Col xs={3} ><Button onClick={backspace} variant="secondary" className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faBackspace} /></Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('+')} variant="secondary" className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faPlus} /></Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('-')} variant="secondary" className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faMinus} /></Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('/')} variant="secondary" className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faDivide} /></Button></Col>
            </Row>
            <Row>      
              <Col xs={3} ><Button onClick={() => appendToDisplay('7')} variant="light" className="w-100 mb-2 border-black">7</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('8')} variant="light" className="w-100 mb-2 border-black">8</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('9')} variant="light" className="w-100 mb-2 border-black">9</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('*')} variant="secondary" className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faTimes} /></Button></Col>
            </Row>
            <Row>      
              <Col xs={3} ><Button onClick={() => appendToDisplay('4')} variant="light" className="w-100 mb-2 border-black">4</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('5')} variant="light" className="w-100 mb-2 border-black">5</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('6')} variant="light" className="w-100 mb-2 border-black">6</Button></Col>
              <Col xs={3} ><Button onClick={() => appendToDisplay('%')} variant="secondary"className="w-100 mb-2 border-black"><FontAwesomeIcon icon={faPercentage} /></Button></Col>
            </Row>
            <Row> 
              <Col xs={9}>
                <Row>
                  <Col xs={4} ><Button onClick={() => appendToDisplay('1')} variant="light"className="w-100 mb-2 border-black">1</Button></Col>
                  <Col xs={4} ><Button onClick={() => appendToDisplay('2')} variant="light" className="w-100 mb-2 border-black">2</Button></Col>
                  <Col xs={4} ><Button onClick={() => appendToDisplay('3')} variant="light"className="w-100 mb-2 border-black">3</Button></Col>
                  <Col xs={4} ><Button onClick={() => appendToDisplay('.')} variant="light" className="w-100 mb-2 border-black">.</Button></Col>
                  <Col xs={4} ><Button onClick={() => appendToDisplay('0')} variant="light" className="w-100 mb-2 border-black">0</Button></Col>
                  <Col xs={4} ><Button onClick={clearDisplay} variant="light" className="w-100 mb-2 border-black">C</Button></Col>
                </Row>
              </Col>
              <Col xs={3}>
                <Row className="d-grid gap-2"  >
                  <Col><Button onClick={calculate} variant="primary" rows={2} className="w-100 mb-2 border-black" style={{height: "83px"}}>=</Button></Col>
                </Row>
              </Col>
            </Row>  
        </Col>
    </Container>
  );
}

export default Layout;
