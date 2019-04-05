import React from "react"

import { connect } from "react-redux"

// import { deleteTask, toggleCompleteTask } from "../../redux"

const ItemsList = (props) => {
  // const TaskList = (props) => {
  // const tasks = props.tasks

  // console.log("ITEMS-LIST: ", props.tasks[0].items[1])

  return (
    <div>
      {props.tasks.map((task, index) => (
        <div key={index}>
          <ul>
            <li>{task.items}</li>
          </ul>
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
)(ItemsList)
