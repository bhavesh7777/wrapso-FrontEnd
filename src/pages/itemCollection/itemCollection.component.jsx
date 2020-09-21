import React from 'react'
import { Divider } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import CustomSlideShow from '../../component/customSlideShow/customSlideShow.component'
import './itemCollection.styles.css'
import ItemColletionContainer from '../../component/itemCollectionContainer/itemCollectionContainer.component'

const ItemCollectionPage = () => {
  const history = useHistory()
  const pathName = history.location.pathname.split('/')[2]
  return (
    <>
      <div className="main-container">
        <CustomSlideShow />
        <Divider horizontal>{pathName}</Divider>
        <ItemColletionContainer />
      </div>
    </>
  )
}
export default ItemCollectionPage
