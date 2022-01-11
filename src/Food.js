import React from "react";
// import getFoodData from "./foodData";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  // const data = [...getFoodData];

  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

Food.defaultProps = {
  name: "치킨",
  picture:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating: 10,
};

export default Food;
