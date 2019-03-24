import React from 'react'
import { connect } from 'react-redux'
import { toggle } from '../actions'

const App = ({  toggle, dispatch }) => (
    <div className="container">
     
      <div className="columns column is-12">
        <h1>toggle : {toggle}</h1>
      </div>
  
      <div className="buttons">
        <button onClick={() => dispatch(toggle())} className="button is-primary">
          toggle
        </button>
      </div>
    </div>
  )

  const mapStateToProps = function (state) {
    return {
      message: 'This is message from mapStateToProps',
      toggle: state.toggle || false
    }
  }
  
  export const Toggle = connect(mapStateToProps)(App)