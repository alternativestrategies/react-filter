import React, {Component} from 'react';
import Products from './Data.json';
import Product from './Products';

class App extends Component {
  state = {
    type: "",
    checked: false,
  }

  check = React.createRef();
  category = React.createRef();

  handleProducts = (type) =>{
    this.setState ({
      type: type
    }, () => console.log(this.state.type))
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    }, () => console.log(this.state.checked))
  }

  handleChange = () => {
    this.handleProducts(
      this.category.current.value
    );
  }

  render() {
    let results = [];

    if(this.state.checked === true){
      Products.sort((a,b) => {
        return b.price - a.price;
      })
    }
    else if (this.state.checked === false){
      Products.reverse(Products.price)
    }
    

    Products.filter(product => {
      if (this.state.type  === "All" || this.state.type === ""){
        results.push(<Product name={product.name} price={product.price}/>);
      } 
      if (this.state.type === product.type){
        results.push(<Product name={product.name} price={product.price}/>);
      }
    })

    //results.sort()

    return (
      <React.Fragment>
        <form className="filter-menu">
         <label htmlFor ="price">Sort By Price</label>
         <input id="price" type="checkbox" onChange={this.toggleCheck} checked={this.state.checked}/>
         <label htmlFor="category">Filter By Category</label>
         <select id="category" ref={this.category} onChange={this.handleChange}>
           <option value="All">All</option>
           <option value="tape">Tape</option>
           <option value="organization">Organization</option>
           <option value="highlighters">Highlighters</option>
         </select>
       </form>
       {results}
      </React.Fragment>
    );
  }
}

export default App;
