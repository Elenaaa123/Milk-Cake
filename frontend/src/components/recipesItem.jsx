import './recipesItem.css';
const RecipesItem = ({ item }) => {
  return (
    <div className="itemContainer">
      <img src={item.img} alt="cake" />
      <div className="info">
        <h1 className="title">{item.title}</h1>

        <button
          onClick={() => {
            window.location.href = item.url;
          }}
        >
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default RecipesItem;
