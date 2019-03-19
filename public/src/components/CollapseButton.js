import React from 'react';

function CollapseButton(props){
    return(

        
        <div>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#exampleModalScrollable"+props.id}>
Ingredients
</button>
      

      <div className="modal fade" id={"exampleModalScrollable"+props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title" id="exampleModalScrollableTitle">{props.label}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        
        </div>
<div className="modal-body">
         {props.dietlabels.map(dietlabel => (
        // <h5 class="modal-title" id="exampleModalScrollableTitle">{props.label}</h5>
       
        <li style = {{color:'green'}}>{dietlabel}</li>
      
        // <p  key ={props.key}>{ingredient.text}</p>



))}

<hr/>
<h6>Ingredients</h6>
      {props.ingredients.map(ingredient => (
        // <h5 class="modal-title" id="exampleModalScrollableTitle">{props.label}</h5>
       
        <p>{ingredient.text}</p>
      
        // <p  key ={props.key}>{ingredient.text}</p>



))}
<hr/>
<a href ={props.url}>Check out the Recipe</a>
</div>
</div>

      </div>
    </div>

           
    </div>
    )
}

 export default CollapseButton;
