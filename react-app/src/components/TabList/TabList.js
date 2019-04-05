import React from "react"
import { connect } from "react-redux"
import { viewProfile } from "../../redux"
import "./TabList.css"

const TabList = (props) => {
  // const TaskList = (props) => {
  // const tasks = props.tasks

  console.log("tab list props: ", props)
  return (
    <div className="tabListContainer">
      {props.tasks.map((task, index) => (
        <ul key={index}>
          <li onClick={() => props.viewProfile(task.id)}>{task.title}</li>
        </ul>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  viewProfile: (id) => dispatch(viewProfile(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList)
