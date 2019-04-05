import React from "react"
import { connect } from "react-redux"
import { viewProfile, updateTasksList } from "../../redux"
import { retrieveTasksPromise } from '../../helper';
import axios from 'axios';
import "./TabList.css"

class TabList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveTasksFromServer();
  }

  render() {
    console.log("tab list props: ", this.props)
    return (
      <div className="tabListContainer">
        <ul>
          {this.props.tasks.map((task, index) => (
            <li key={index} onClick={() => this.props.viewProfile(task.id)}>{task.title}</li>
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
const mapDispatchToProps = (dispatch) => ({
  retrieveTasksFromServer: () => retrieveTasksPromise().then( (response) => dispatch(updateTasksList(response.data))),
  viewProfile: (id) => dispatch(viewProfile(id))
})

// v1 -- NO helper file needed...
// const mapDispatchToProps = (dispatch) => ({
//   retrieveTasksFromServer: () => {
//     axios
//       .get(`http://5c992ab94236560014393239.mockapi.io/tasks`)
//       .then( (response) => {
//         dispatch(updateTasksList(response.data))
//       });
//   },
//   viewProfile: (id) => dispatch(viewProfile(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList)
