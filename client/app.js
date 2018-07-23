import React from 'react'
import Campgrounds from './campgrounds.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [
      ]
    }

  }

  componentDidMount() {
    fetch('/campgrounds')
      .then(res => res.json())
      .then(campgrounds => {
        this.setState({
          campgrounds: campgrounds
        })
    })

  }

  render() {
    return (
      <Campgrounds campgrounds={this.state.campgrounds}/>
    )
  }
}
