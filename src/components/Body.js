import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/restaurants";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    useEffect(() => {
      fetchData();
    }, []);

    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

        const response = await data.json();

        console.log(
          response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFilteredRestaurants(
          response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        console.log("restaurants", response);
    }


    function filterRestaurants() {
        const filteredData = restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredRestaurants(filteredData);

        // console.log("filtered Restaurants",filterRestaurants)
      }

      function filterTopRatedRestaurants(restaurants) {
        setFilteredRestaurants(restaurants);
      }


    return(
        <>
        <div className="bg-[url('https://t4.ftcdn.net/jpg/03/78/97/59/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg')] bg-cover bg-no-repeat bg-fixed">
        <div class="text-center" >
        <input type="text"
         placeholder="Search your Restaurant/Dish Here!" 
         class="w-3/12  m-10 shadow shadow-yellow-500/40 hover:shadow-indigo-500/40"
         onChange={(e) => setSearchText(e.target.value)}
         />
            <button class="hover:bg-yellow-100 ..."
            onClick={filterRestaurants}
            >Search</button>
            
            <TopRatedRestaurants
            topRatedRestaurants={filterTopRatedRestaurants}
            filteredRestaurants={filteredRestaurants}
            />

            <div className="restaurant-cards">
                {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard
                        key={restaurant.info.id}
                        details={restaurant.info}
                        /> 
                    ))}
            </div>
        </div>
        </div>
        </>
    );
};

export default Body;