
import { connect } from 'react-redux';
import BubbleChart from './BubbleChart';

const getData = (quarter, value) => {
    return quarter;
}

const mapStateToProps = (state, value) =>{
    return {
    data: getData(state)
}};

const ChartVisible = connect(mapStateToProps)(BubbleChart);

export default ChartVisible;