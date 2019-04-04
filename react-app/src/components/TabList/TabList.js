import React from "react"

import { connect } from "react-redux"

// import { deleteTask, toggleCompleteTask } from "../../redux"

const TabList = (props) => {
  // const TaskList = (props) => {
  // const tasks = props.tasks

  console.log(props)
  return (
    <div>
      {props.tasks.map((task, index) => (
        <div style={{ display: "inline-block" }} key={index}>
          <ul>
            <li style={{ display: "inline-block" }}>{task.title}</li>
          </ul>
          {/* <button
							onClick={() => {
								toggleCompleteTask(task.id)
							}}>
							Mark Complete
            </button> */}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  // destroyTask: (id) => dispatch(deleteTask(id)),
  // toggleCompleteTask: (id) => dispatch(toggleCompleteTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList)
