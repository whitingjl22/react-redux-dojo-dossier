import React from "react"
import "./AddNewTab.css"

class AddNewTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  handleChange = (e) => {
    console.log(`changing ${e.target.name}`)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="addNewTabContainer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="title" onChange={this.handleChange} value={this.state.title} />
          <br />
          <input type="submit" value="Add New Tab" />
        </form>
      </div>
    )
  }
}

export default AddNewTab
