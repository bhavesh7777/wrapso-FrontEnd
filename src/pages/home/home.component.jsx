import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomSlideShow from '../../component/customSlideShow/customSlideShow.component'
import CustomCard from '../../component/customCategoryCard/customCategoryCard.component'
import './home.styles.css'

const Home = () => {
  console.log('homeapge')
  const history = useHistory()
  const redirectCategories = (category) => {
    history.push({ pathname: `/itemCollection/${category}` })
  }
  return (
    <>
      <div className="home" />
      <CustomSlideShow />
      <div className="card-panel-container">
        <CustomCard
          img="https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Crispy-BBQ-Chicken-Wraps-2.jpg"
          imgName="Wrap"
          onClick={() => redirectCategories('wrap')}
        />
        <CustomCard
          img="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"
          imgName="Pizza"
          onClick={() => redirectCategories('pizza')}
        />
        <CustomCard
          img="https://cafedelites.com/wp-content/uploads/2017/05/Best-Lemon-Herb-Mediterranean-Pasta-Salad-IMAGES-3-500x500.jpg"
          imgName="Pasta"
          onClick={() => redirectCategories('pasta')}
        />
        <CustomCard
          img="https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style-500x500.jpg"
          imgName="Biryani"
          onClick={() => redirectCategories('biryani')}
        />
      </div>
    </>
  )
}
export default Home
