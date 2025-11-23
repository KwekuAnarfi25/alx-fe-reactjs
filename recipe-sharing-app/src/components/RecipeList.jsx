import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const removeRecipe = useRecipeStore((state) => state.removeRecipe);

  if (!recipes.length) {
    return <div>No recipes yet — add one!</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 8, borderRadius: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: 0 }}>{recipe.title}</h3>
            <small style={{ color: '#666' }}>{new Date(recipe.createdAt).toLocaleString()}</small>
          </div>
          <p style={{ marginTop: 6 }}>{recipe.description}</p>
          <div>
            <button onClick={() => removeRecipe && removeRecipe(recipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
