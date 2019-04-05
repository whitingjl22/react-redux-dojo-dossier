import React from "react"
import { connect } from "react-redux"
import { viewProfile } from "../../redux"
import DossierEntry from "../DossierEntry/DossierEntry"
import "./TabList.css"

const TabList = (props) => {
  // const TaskList = (props) => {
  // const tasks = props.tasks

  let dossiers = props.tasks.map((task, idx) => <DossierEntry task={task} key={idx} />)

  console.log("tab list props: ", props)
  return (
    <div className="tabListContainer">
      {/* {props.tasks.map((task, index) => (
        <div style={{ display: "inline-block" }} key={index}>
          <ul>
            <li>{task.title}</li>
          </ul>
        </div>
			))} */}
      <ul>{dossiers}</ul>
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
