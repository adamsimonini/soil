import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Quarters
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Q1</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Q2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Q3</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Q4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}