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
            
            <div><input type="text" value={display} readOnly className="display w-100 " /></div>
            <div>
              <Row>
                <Col xs={3} ><Button onClick={backspace}>←</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('+')}>+</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('-')}>-</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('/')}>/</Button></Col>      
              
                <Col xs={3} ><Button onClick={() => appendToDisplay('7')}>7</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('8')}>8</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('9')}>9</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('*')}>*</Button></Col>       
              
                <Col xs={3} ><Button onClick={() => appendToDisplay('4')}>4</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('5')}>5</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('6')}>6</Button></Col>
                <Col xs={3} ><Button onClick={() => appendToDisplay('%')}>%</Button></Col>       
                  
                  <Col xs={9}>
                    <Col xs={3} ><Button onClick={() => appendToDisplay('1')}>1</Button></Col>
                    <Col xs={3} ><Button onClick={() => appendToDisplay('2')}>2</Button></Col>
                    <Col xs={3} ><Button onClick={() => appendToDisplay('3')}>3</Button></Col>
                    <Col xs={3}><Button onClick={() => appendToDisplay('.')}>.</Button></Col>
                    <Col xs={3}><Button onClick={() => appendToDisplay('0')} className="zero">0</Button></Col>
                    <Col xs={3}><Button onClick={clearDisplay}>C</Button></Col>
                  </Col>
                  <Col xs={3}>
                    <Col><Button onClick={calculate} className="equal">=</Button></Col>
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
