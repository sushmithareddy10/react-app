import React from "react";
import ListViewComponent from "./ListViewComponent";
import CardComponent from "./CardComponent";
import SmallCardComponent from "./SmallCardComponent";
class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <ListViewComponent />
        <CardComponent />
        <SmallCardComponent />
      </div>
    );
  }
}
export default MainComponent;
