import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
            </div>
        );
    }
}

const mapStateToProps = state => (
    { ctr: state.counter }
)

const mapDispatchToProps = dispatch => (
    {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFive: () => dispatch({type: 'ADD', value: 5}),
        onSubFive: () => dispatch({type: 'SUB', value: 5})
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);