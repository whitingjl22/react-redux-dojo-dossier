import React from "react"
import "./Container.css"
import AddNewTab from "../components/AddNewTab/AddNewTab"
import TabList from "../components/TabList/TabList"
import AddItem from "../components/AddItem/AddItem"
import ItemsList from "../components/ItemList/ItemsList"

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
        <div className="contentContainer">
          <TabList />
          <ItemsList />
          <AddItem />
        </div>
      </div>
    )
  }
}

export default Container
