import React from 'react'
import { useHistory } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import CustomSlideShow from '../../component/customSlideShow/customSlideShow.component'
import CustomCard from '../../component/customCategoryCard/customCategoryCard.component'
import './home.styles.css'

const Home = () => {
  const history = useHistory()
  const redirectCategories = (category) => {
    history.push({
      pathname: `/itemCollection/${category}`,
    })
  }
  return (
    <>
      <div className="home" />

      <CustomSlideShow />

      <Divider horizontal>Food Category</Divider>

      <div className="card-panel-container">
        <CustomCard
          img="https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Crispy-BBQ-Chicken-Wraps-2.jpg"
          imgName="Wrap"
          onClick={() => redirectCategories('wrap')}
        />
        <CustomCard
          img="https://static.toiimg.com/photo/53110049.cms"
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
