import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1);
    };

    const HandleReset = () => {
        setCounter(value);
    };

    const HandleSubstract = () => {  
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={HandleReset} >Reset</button>
            <button onClick={HandleSubstract} >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
