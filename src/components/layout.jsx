import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <input type="text" value={display} readOnly className="display" />
          <div className="buttons">
            <button onClick={clearDisplay}>C</button>
            <button onClick={backspace}>←</button>
            <button onClick={() => appendToDisplay('/')}>/</button>
            <button onClick={() => appendToDisplay('*')}>*</button>
            <button onClick={() => appendToDisplay('7')}>7</button>
            <button onClick={() => appendToDisplay('8')}>8</button>
            <button onClick={() => appendToDisplay('9')}>9</button>
            <button onClick={() => appendToDisplay('-')}>-</button>
            <button onClick={() => appendToDisplay('4')}>4</button>
            <button onClick={() => appendToDisplay('5')}>5</button>
            <button onClick={() => appendToDisplay('6')}>6</button>
            <button onClick={() => appendToDisplay('+')}>+</button>
            <button onClick={() => appendToDisplay('1')}>1</button>
            <button onClick={() => appendToDisplay('2')}>2</button>
            <button onClick={() => appendToDisplay('3')}>3</button>
            <button onClick={calculate} className="equal">=</button>
            <button onClick={() => appendToDisplay('0')} className="zero">0</button>
            <button onClick={() => appendToDisplay('.')}>.</button>
            
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
