import React from "react"

import { connect } from "react-redux"

const ItemsList = (props) => {
  // const TaskList = (props) => {
  // const tasks = props.tasks

  // console.log("ITEMS-LIST: ", props.tasks[0].items[1])

  console.log("ITEMS-PROFILE: ", props.profile)

  return (
    <div>
      {/* {props.profile.items.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{item}</li>
          </ul>
        </div>
      ))} */}

      {props.profile !== null ? (
        <div className="profile">
          <li>{props.profile.items}</li>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  profile: state.profileToView
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList)
