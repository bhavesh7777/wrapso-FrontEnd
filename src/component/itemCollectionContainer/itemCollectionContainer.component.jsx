import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ItemCollection from '../itemCollection/itemcollection.component'

const ItemCollectionContainer = () => {
  const [foodItemsArray, setFoodItemsArray] = useState([])
  const history = useHistory()
  useEffect(() => {
    const pathName = history.location.pathname.split('/')[2]

    axios
      .get('http://localhost:8080/user/item/' + pathName)
      .then((response) => {
        setFoodItemsArray(response.data.content)
      })
  }, [])

  return <ItemCollection foodItemsArray={foodItemsArray} />
}

export default ItemCollectionContainer
