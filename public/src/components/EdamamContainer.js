import React, { Component } from 'react';
import API from "../utils/API";
import RecipeDisplay from "./RecipeDisplay";
import Input from "./Input";
import FormBtn from './FormBtn';




export class EdamamContainer extends React.Component {

  state = {
    result: [],
    search: "",
    diet:""
  };

    // componentDidMount() {
    //     this.searchRecipes(4,'balanced');
      
        
    //   }

    searchRecipes = (to,diet) => {
     
        API.search(to,diet)
        .then(res => this.setState({ result: res.data.hits }))
        .catch(err => console.log(err));
      };

 
      

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
       };

      
      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        console.log(this.state.diet)
        this.searchRecipes(this.state.search,this.state.diet);
      };

    

  render() {
    
    return (
      
      // <div className ="container">
      
      <form>
      
          <Input
                className="form-control col-4"
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Number of Recipes (required)"
              />
              
              {/* <Input
                className="form-check-input"
                type="radio"
                value="balanced"
                onChange={this.handleInputChange}
                name="diet"
                placeholder="Diet (required)"
              />Balanced */}

<select className="custom-select my-1 mr-sm-2 col-4" id="inlineFormCustomSelectPref" name = "diet" onChange={this.handleInputChange}>
    <option defaultValue>Choose...</option>
    <option value="balanced">Balanced</option>
    <option value="low-fat">Low Fat</option>
    <option value="	high-fiber">High Fiber</option>
    <option value="	high-protein">High Protein</option>
    <option value="	low-carb">Low Carb</option>
    <option value="	low-fat">Low Fat</option>
    <option value="	low-sodium">Low Sodium</option>

  </select>
            
        <FormBtn
                disabled={!(this.state.search && this.state.diet)}
                onClick={this.handleFormSubmit}
              >Search Diet</FormBtn>
          
              <RecipeDisplay
         style = {{height:"350px"}} results={this.state.result}/>
          
           
           
       </form>
        
         
    )
  }
}

 export default EdamamContainer;