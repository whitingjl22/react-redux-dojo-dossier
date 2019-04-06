import React from "react"
import { connect } from "react-redux"
import { viewProfile, updateTasksList } from "../../redux"
// import { retrieveTasksPromise } from "../../helper"
import axios from "axios"
import "./TabList.css"

class TabList extends React.Component {
  componentDidMount() {
    this.props.retrieveTasksFromServer()
  }

  render() {
    console.log("tab list props: ", this.props)
    return (
      <div className="tabListContainer">
        <ul>
          {this.props.tasks.map((task, index) => (
            <li key={index} onClick={() => this.props.viewProfile(task.id)}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

// v2 -- helper file needed...
// const mapDispatchToProps = (dispatch) => ({
//   retrieveTasksFromServer: () => retrieveTasksPromise().then((response) => dispatch(updateTasksList(response.data))),
//   viewProfile: (id) => dispatch(viewProfile(id))
// })

// v1 -- NO helper file needed...
const mapDispatchToProps = (dispatch) => ({
  retrieveTasksFromServer: () => {
    axios
      .get("http://localhost:4000/api/tasks")
      .then((response) => {
        dispatch(updateTasksList(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  },
  viewProfile: (id) => dispatch(viewProfile(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList)
