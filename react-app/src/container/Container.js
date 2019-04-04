import React from "react"
import "./Container.css"
import AddNewTab from "../components/AddNewTab/AddNewTab"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="containerPage">
        <h1>Dojo Dossier</h1>
        <AddNewTab />
        <div className="contentContainer" />
      </div>
    )
  }
}

export default Container
