/* eslint-disable react/prop-types */
import './App.css'
export default function Recipe({ recipe }){
 return (
    <div className="recipe" onClick={() => document.title = recipe.title}>
      <h2>{recipe.title}</h2>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Directions:</strong> {recipe.directions}</p>
    </div>
 );
}


