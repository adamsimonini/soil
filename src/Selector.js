import React from 'react';
import SelectQuarter from './SelectQuarter';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      quarter: 'Quarter',
    };
  }
  _onClick(val) {
    this.setState({
      quarter: val,
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown style={{ position: 'absolute', right: 0}} direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.state.quarter}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this._onClick.bind(this,'Q1')}>Q1</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this._onClick.bind(this, 'Q2')}>Q2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this._onClick.bind(this, 'Q3')}>Q3</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this._onClick.bind(this, 'Q4')}>Q4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}