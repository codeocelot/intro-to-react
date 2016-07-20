import React from 'react'

export default ({handleSubmit,...props}) => {

  return <form>
    <label>Input:</label>
    <input type="text"/>
    <button type="button" onClick={handleSubmit}>Click Me</button>
  </form>
}
