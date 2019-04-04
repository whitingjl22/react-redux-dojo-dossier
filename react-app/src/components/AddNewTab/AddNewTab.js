import React from "react"
import "./AddNewTab.css"
import { connect } from "react-redux"
import { updateNewTabValue, createTask } from "../../redux"

const AddNewTab = (props) => {
  const preHandleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit()
  }

  return (
    <div className="addNewTabContainer">
      <form onSubmit={preHandleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={props.value}
          onChange={(event) => props.handleChange(event.target.value)}
        />
        <br />
        <input type="submit" value="Add New Tab" />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // variables passed into prop || : || variables retrieved from state parameter
  value: state.newTabValue
})

const mapDispatchToProps = (dispatch) => ({
  // methods passed into prop || : || methods retrieved from imported actions
  handleChange: (value) => dispatch(updateNewTabValue(value)),
  handleSubmit: () => dispatch(createTask())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewTab)
