import Navi from "./Navi";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default class App extends Component {
  state={currentCategory:""}
  changeCategory = (categories) => {
    this.setState({ currentCategory:categories.categoryName })
  };

  render() {
   let titleproduct = "ProductList";
   let titlecategory = "Cars Types";
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <CategoryList currentCategory ={this.state.currentCategory}changeCategory={this.changeCategory} title={titlecategory} />


            </div>
            <div className="col-lg-9">
              <Navi />

              <ProductList title={titleproduct} />

            </div>
          </div>
        </div>







      </div>
    )};
  }


