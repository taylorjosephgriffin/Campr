import React from 'react'

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
    
    )
  }
}
