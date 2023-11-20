import { restaurants } from "../utils/restaurants";

const TopRatedRestaurants = (props) => {
  function getTopRatedRestaurants() {
    const topRatedRestaurants = props.filteredRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4
    );

    props.topRatedRestaurants(topRatedRestaurants);

    console.log("top rated Restaurants", topRatedRestaurants);
  }

  return (
    <button
      className="hover:bg-yellow-100 ... m-4"
      onClick={getTopRatedRestaurants}
    >
      TopRatedRestaurants
    </button>
  );
};

export default TopRatedRestaurants;