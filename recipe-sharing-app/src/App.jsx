import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecipeStore } from "./store/recipeStore";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail"; // create this if not done yet

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Jollof Rice", description: "Spicy West African rice dish" },
      { id: 2, title: "Fufu and Light Soup", description: "Traditional Ghanaian dish" },
      { id: 3, title: "Kelewele", description: "Spicy fried plantains" },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
