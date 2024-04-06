import { useEffect, useState } from 'react';
import Recipe from './Recipe';

export default function RecipeList(){
 const [recipes, setRecipes] = useState([]);

 useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const results = await fetch("https://api.sampleapis.com/recipes/recipes");
        const json = await results.json();
        setRecipes(json);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();

    return () => {
      console.log('Unmounted');
    };
 }, []);

 return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
 );
}
