import ReactDOM from "react-dom";
import Pet from "./Pet";


const App=()=>{
  return(
  <div>
    <h1>Adopt a Pet</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese"/>
    <Pet name="Pepper" animal="Bird" breed="Cocktiel"/>
    <Pet name="Doink" animal="Cat" breed="Mix"/>
  </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"));