import React from 'react'
import Container from './formContainer'
import Presentation from './formPresentation'

/* This could also be a stateless component! */
export default class Form extends React.Component{
  render = () => Container(Presentation)
}
