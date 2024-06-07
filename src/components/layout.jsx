import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Layout = () => {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const handleKeydown = (event) => {
    const { key } = event;
    if (/\d|\+|\-|\*|\/|\./.test(key)) {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    }
  };
  return (
    <div className="fluid container">
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} xl={4} onKeyDown={handleKeydown}>
          <div className="text-center border p-4">
            <Row>
            <Col>
            <input type="text" value={display} readOnly className="display w-100" />
            </Col>
            </Row>
            <div>
              <Row >
                <Col xs={3} ><Button onClick={backspace} className="backspace w-100 m-1">←</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('+')} className="plus w-100 m-1 d-grid">+</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('-')} className="minus w-100 m-1">-</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('/')} className="divide w-100 m-1">/</Button></Col>      
                <Col xs={3} ><Button onClick={() => appendToDisplay('7')} className="seven w-100 m-1">7</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('8')} className="eight w-100 m-1">8</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('9')} className="nine w-100 m-1">9</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('*')} className="asterik w-100 m-1">*</Button></Col>      
                <Col xs={3} ><Button onClick={() => appendToDisplay('4')} className="four w-100 m-1">4</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('5')} className="five w-100 m-1">5</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('6')} className="six w-100 m-1">6</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('%')} className="percentage w-100 m-1">%</Button></Col> 
                  <Col xs={9}>
                    <Row>
                    <Col xs={4} ><Button onClick={() => appendToDisplay('1')} className="one w-100 m-1">1</Button></Col>
                    <Col xs={4} ><Button onClick={() => appendToDisplay('2')} className="two w-100 m-1">2</Button></Col>
                    <Col xs={4} ><Button onClick={() => appendToDisplay('3')} className="three w-100 m-1">3</Button></Col>
                    <Col xs={4}><Button onClick={() => appendToDisplay('.')} className="dot w-100 m-1">.</Button></Col>
                    <Col xs={4}><Button onClick={() => appendToDisplay('0')} className="zero w-100 m-1">0</Button></Col>
                    <Col xs={4}><Button onClick={clearDisplay} className="clear w-100 m-1">C</Button></Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row>
                    <Col><Button onClick={calculate} className="equal w-100 m-1">=</Button></Col>
                    
                    </Row>
                  </Col>
                  
              
                      
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
