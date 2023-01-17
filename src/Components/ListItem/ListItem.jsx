import React, { useState } from "react";
import "./list1.scss";

const ListItem = ({ index, movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="productList">
        <div className="productCard">
          <img src={movie.poster} className="productImage"></img>
          <div className="productCard__content">
            <h3 className="productName">{movie.name}</h3>
            <div className="displayStack__1">
              <div className="productSales">{movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
