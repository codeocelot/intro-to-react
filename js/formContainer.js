import React from 'react'


export default (ComposedComponent) => {
  const handleSubmit = () => alert('yolo')
  return <ComposedComponent handleSubmit={handleSubmit}/>
}
