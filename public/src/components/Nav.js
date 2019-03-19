
class Nav extends React.Component{
              

              state={
                    name:"This"
                }
            
                render(){
    return (
       
    <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">{this.state.name}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
          </li> 
          <li class="nav-item active">
          <a class="nav-link" href="#justlogs">Stats<span class="sr-only"></span></a></li>
            <li class="nav-item active">
          <a class="nav-link" href="#myChart">Weekly Status <span class="sr-only"></span></a></li>
        <li class="nav-item active">
        <a class="nav-link" href="#mybestdiv">Achievments <span class="sr-only"></span></a></li>
      <li class="nav-item active">
      <a class="nav-link" href="#to">Time to Eat<span class="sr-only"></span></a></li></ul>
    </div>
    </nav>
    </div>
    
    );			
  
}
  
}  
  
 
  ReactDOM.render(
    <Nav />,						
    document.getElementById('nav')
  );

