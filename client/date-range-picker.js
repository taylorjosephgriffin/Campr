import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize'

export default class DateRangeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    }
  }

  render() {
    return (
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
      />
    );
  }
}
