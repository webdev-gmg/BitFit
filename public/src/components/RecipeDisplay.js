import React from "react";
import CollapseButton from './CollapseButton'

function RecipeDisplay(props){
    return (
        <div className= "row">
        
        {/* <ul className="list-group search-results"> */}
        
          {props.results.map(result => (
              <div className ="col-4 mb-4 mt-4"> 
              <div className="card h-70" >
           
            {/* <span key={result} className="list-group-item"> */}
              <img alt="Recipe" src={result.recipe.image} className="img-fluid" />
              <div className="card-body">
    <h6 className="card-title text-truncate">{result.recipe.label}</h6>
    {/* <p className="card-text">.</p> */}

            
                    <CollapseButton key = {(result.recipe.label).replace(/ +/g, "")} 
                    id={(result.recipe.label).replace(/ +/g, "")} 
                    ingredients = {result.recipe.ingredients}
                    label = {result.recipe.label}
                    dietlabels =  {result.recipe.dietLabels}
                    healthlabels =  {result.recipe.healthLabels}
                    url = {result.recipe.url}
                    />
            

  </div>
            {/* </span> */}
            </div>
            </div>
          ))}
           
        {/* </ul> */}
        </div>
      );
}

export default RecipeDisplay;