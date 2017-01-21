import React, { Component } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import '../../../css/App.css'

const AppBody = styled.div`
  display: flex;
`

class App extends Component {
  render() {
    return (
      <AppBody>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppBody>
    )
  }
}

export default App
