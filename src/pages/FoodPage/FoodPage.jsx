import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const FoodPage = () => {
  const [category, setCategory] = useState("All"); 

  return (
    <>
      <div>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>
    </>
  );
};

export default FoodPage;
