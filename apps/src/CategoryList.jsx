import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class componentName extends Component {
  state = {
    categories: [
      { cataegoryId: 1, categoryName: "Land cruser" },
      { cataegoryId: 2, categoryName: "Range Rover" },
      { cataegoryId: 3, categoryName: "Jeep" },
      { cataegoryId: 3, categoryName: "Chadilac" },
      { cataegoryId: 3, categoryName: "BMW" },
      { cataegoryId: 3, categoryName: "Nissan" },
      { cataegoryId: 3, categoryName: "Mercedes" },
      { cataegoryId: 3, categoryName: "Toyota" },
    ]
    
  };

 

  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>{this.state.counter}</p>
        <ListGroup>
          {this.state.categories.map((categories) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(categories)}
              key={categories.cataegoryId}
            >
              {" "}
              {categories.categoryName}
            </ListGroupItem>
          ))}
        
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </>
    );
  }
}
