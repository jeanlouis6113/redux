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
        <button onClick={() => dispatch({ type: 'ADD' })}> + 1</button>
        <button onClick={() => dispatch({ type: 'REMOVE' })}> - 1</button>
        </div>
        <br></br>
        <div>
        <button onClick={() => dispatch({ type: 'ADD_TEN' })}> + 10</button>
        <button onClick={() => dispatch({ type: 'REMOVE_TEN' })}> - 10</button>
        </div>
        <br></br>
        <div>
        <button onClick={() => dispatch({ type: 'RESET' })}> RESET</button>
        </div>
    </div>
);



export default connect(mapStateToProps)(CounterContainer);