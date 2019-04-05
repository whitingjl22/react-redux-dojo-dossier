import React from "react"
import "./AddItem.css"
import { connect } from "react-redux"
import { updateNewItemValue, createNewItem } from "../../redux"
import axios from "axios"

const AddItem = (props) => {
  const preHandleSubmit = (event) => {
    event.preventDefault()
    props.postItemToServer(props.value, props.id)
  }

  return (
    <div className="addItemContainer">
      <input type="text" name="title" value={props.value} onChange={(event) => props.handleChange(event.target.value)} />
      <button onClick={preHandleSubmit}>Add Item</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // variables passed into prop || : || variables retrieved from state parameter
  value: state.newItemValue,
  id: state.idOfProfileToView
})

const mapDispatchToProps = (dispatch) => ({
  // methods passed into prop || : || methods retrieved from imported actions
  handleChange: (value) => dispatch(updateNewItemValue(value)),
  handleSubmit: () => dispatch(createNewItem()),

  postItemToServer: (value, id) => {
    axios.get(`http://5c992ab94236560014393239.mockapi.io/tasks/${id}`).then((tasksGetResponse) => {
      console.log("tasksGetResponse:", tasksGetResponse.data)
      axios
        .put(`http://5c992ab94236560014393239.mockapi.io/tasks/${id}`, { items: [...tasksGetResponse.data.items, value] })
        .then((response) => {
          dispatch(createNewItem(response.data))
        })
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
