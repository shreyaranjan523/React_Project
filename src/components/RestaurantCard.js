import { CDN_IMG_URL } from "../utils/constants";


const RestaurantCard = (props) => {

    const {name, cuisines, avgRating, costForTwo, image} = props.details;

    return(
        <div className="restaurant-card">
            <img
                src={image}
            ></img>
            <div className="restaurant-details">
                <div>
                    <h2>{name}</h2>
                    <h3>{cuisines}</h3>
                </div>
                <div>
                    <h3>{avgRating}</h3>
                    <h3>{costForTwo / 100}</h3>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;