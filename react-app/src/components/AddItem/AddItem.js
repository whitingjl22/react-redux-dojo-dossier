import React from "react"
import "./AddItem.css"
import { connect } from "react-redux"

const AddItem = (props) => {
  // const preHandleSubmit = (event) => {
  //   event.preventDefault()
  //   props.handleSubmit()
  // }

  return (
    <div className="addItemContainer">
      <input type="text" name="title" value={props.value} onChange={(event) => props.handleChange(event.target.value)} />
      <button>Add Item</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // variables passed into prop || : || variables retrieved from state parameter
  value: state.newTaskValue
})

const mapDispatchToProps = (dispatch) => ({
  // methods passed into prop || : || methods retrieved from imported actions
  // handleChange: (value) => dispatch(updateNewTaskValue(value)),
  // handleSubmit: () => dispatch(createTask())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
