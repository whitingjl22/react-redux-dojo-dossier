import React from "react"
import "./AddNewTab.css"
import { connect } from "react-redux"
import { updateNewTabValue, createNewTab } from "../../redux"
import axios from "axios"

const AddNewTab = (props) => {
  const preHandleSubmit = (event) => {
    event.preventDefault()
    props.postTabToServer(props.value)
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
  handleSubmit: () => dispatch(createNewTab()),

  postTabToServer: (value) => {
    axios.post(`http://5c992ab94236560014393239.mockapi.io/tasks`, { title: value, items: [] }).then((response) => {
      dispatch(createNewTab(response.data))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewTab)
