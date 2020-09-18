import React from 'react'
import CustomSlideShow from '../../component/customSlideShow/customSlideShow.component'
import './itemCollection.styles.css'
import ItemColletionContainer from '../../component/itemCollectionContainer/itemCollectionContainer.component'

const itemCollection = () => {
  return (
    <>
      <div className="main-container">
        <CustomSlideShow />
        <ItemColletionContainer />
      </div>
    </>
  )
}
export default itemCollection
