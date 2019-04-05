import React from "react"
import { connect } from "react-redux"
import { viewProfile } from "../../redux"

const DossierEntry = (props) => {
  console.log("DossierEntry props: ", props)
  return (
    <li style={{ display: "inline-block", marginRight: "10px" }}>
      <span onClick={() => props.viewProfile(props.task.id)}>{props.task.title}</span>
    </li>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  viewProfile: (id) => dispatch(viewProfile(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DossierEntry)
