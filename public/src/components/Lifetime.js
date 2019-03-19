function Lifetimedistance() {
    return (   
      
      <div className="card"  style= {{"width": "18rem"}}>
      <div className="card-body">
              
        <h4 className="card-title text-center">Lifetime Distance</h4>
        <hr/>
        <h6 className="card-subtitle mb-2 text-muted"></h6>
        <h3 className="card-text ml-2 text-center text-success" id="lifetimeDistanceValue"></h3>
        
      </div>
      </div>
   );			
  }


  function Lifetimesteps() {
    return (   

    <div className="card"  style= {{"width": "18rem"}}>
    <div className="card-body">
            
      <h4 className="card-title text-center">Lifetime Steps</h4>
      <hr/>
      <h3 className="card-subtitle mb-2 text-muted"></h3>
      <h3 className="card-text ml-2 text-center text-success" id="lifetimeStepsValue"></h3>
    </div>
    </div>
   );			
  }
  
  
      
  
  ReactDOM.render(
    <Lifetimedistance />,						
    document.getElementById('lifetimedistance')
   

  );

  ReactDOM.render(
    <Lifetimesteps />,						
  document.getElementById('lifetimesteps')
   

  );

 