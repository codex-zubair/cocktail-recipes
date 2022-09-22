import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';


function App() {
  return (
    <div className="App">
      <h1 className='text-2xl font-semibold'>Cocktail Recipes</h1>

      {/* All Cocktail List */}
      <section className='grid grid-cols-1'>
      <ShowAllCocktails></ShowAllCocktails>
      </section>
      
    </div>
  );
}


// Getting Cocktails Data
const ShowAllCocktails = ()=> 
{
  const [cockTailsList, setCocktailsList] = useState([]);

  useEffect(()=> {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res=> res.json())
    .then(cocktailsList=> setCocktailsList(cocktailsList.drinks))
  },[])
  
  
  return cockTailsList.map(cockTail=> <Card key = {cockTail.idDrink} cockTail = {cockTail}></Card>)

}




export default App;
