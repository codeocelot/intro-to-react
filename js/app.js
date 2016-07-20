

import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {addNode} from './index'

class App extends React.Component{

  render = () =>
<div>
    <h1>{this.props.greeting}</h1>
    {this.props.nodes}
    <Form></Form>
    <button type="button" onClick={()=>this.props.addNode(10)}>Button</button>
    </div>

}

const mapStateToProps = (state) => ({
  nodes: state.nodes
})

const mapDispatchToProps = (dispatch) => ({
  addNode: (yId) => dispatch(addNode(yId))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
