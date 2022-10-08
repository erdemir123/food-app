import data from "./helper/data"
import Card from "./components/Card"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-container">
      <div className="header">
        <p className="header-title">Code Fraternity Cafe Menu</p>
        <p className="black"><i class="fa-solid fa-moon"></i></p>
      </div>
      <div className="menu">
        <p className="menu-title">Our Menu
        <span></span>
        </p>
        <ul className="menuList">
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Coffee</li>
        </ul>
      </div>
      </div>
      <div className="meal-container">
      {data.map((item,index)=><Card key={index} item={item}/>)}
      </div>
    </div>
  );
}

export default App;
