import React from 'react'
import CustomItemCard from '../customItemCard/customItem.component'
import './itemCollection.styles.css'

const Itemcollection = ({ foodItemsArray }) => {
  return (
    <div className="card-container">
      {foodItemsArray &&
        foodItemsArray.map((foodItem) => (
          <CustomItemCard
            foodName={foodItem.foodName}
            foodDescription={foodItem.foodDescription}
            foodPrice={`₹ ${foodItem.amount}`}
            imageUrl={foodItem.image}
            foodId={foodItem.foodId}
          />
        ))}
    </div>
  )
}

export default Itemcollection
