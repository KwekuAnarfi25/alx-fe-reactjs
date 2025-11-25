import React, { useEffect } from "react";
import { useRecipeStore } from "./store/recipeStore";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: 'Jollof Rice', description: 'Spicy West African rice dish' },
      { id: 2, title: 'Fufu and Light Soup', description: 'Traditional Ghanaian dish' },
      { id: 3, title: 'Kelewele', description: 'Spicy fried plantains' },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
