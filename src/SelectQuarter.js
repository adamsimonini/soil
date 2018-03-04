import React from 'react';
import { connect } from 'react-redux';
import { selectQuarter } from './actions/quarter';

let SelectQuarter = ({dispatch}) => {
    return (
        <div onClick={() => {
                dispatch(selectQuarter('q1'));
            }}>
            Q1
        </div>
    );
}

SelectQuarter = connect()(SelectQuarter);
export default SelectQuarter;