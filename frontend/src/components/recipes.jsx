import { recipesItems } from '../data.js';
import './recipes.css';
import RecipesItem from './recipesItem.jsx';

const Recipes = () => {
  return (
    <>
      <h1>We make life delicious.</h1>
      <div className="recipesContainer">
        {recipesItems.map((item) => (
          <RecipesItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Recipes;
