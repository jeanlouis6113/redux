import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    counter: state
  });

const CounterContainer = ({ counter, dispatch }) => (
    <div>
        <h1>Compteur</h1>
        <p>{counter}</p>
        <div>
        <button onClick={() => dispatch({ type: 'add' })}> + 1</button>
        <button onClick={() => dispatch({ type: 'remove' })}> - 1</button>
        </div>
        <br></br>
        <div>
        <button onClick={() => dispatch({ type: 'addTen' })}> + 10</button>
        <button onClick={() => dispatch({ type: 'removeTen' })}> - 10</button>
        </div>
        <br></br>
        <div>
        <button onClick={() => dispatch({ type: 'reset' })}> RESET</button>
        </div>
    </div>
);



export default connect(mapStateToProps)(CounterContainer);