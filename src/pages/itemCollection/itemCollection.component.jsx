import React from 'react'
import { useHistory } from 'react-router-dom'

import CustomSlideShow from '../../component/customSlideShow/customSlideShow.component'
import './itemCollection.styles.css'
import ItemColletionContainer from '../../component/itemCollectionContainer/itemCollectionContainer.component'

const itemCollection = () => {
  return (
    <>
      <div className="main-container">
        <CustomSlideShow />
        <div className="item-title"> Title</div>
        <ItemColletionContainer />
      </div>
    </>
  )
}
export default itemCollection
