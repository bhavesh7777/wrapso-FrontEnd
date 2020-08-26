import React from 'react'
import Header from '../header.component'

const withLayout = (WrappedComponent) => () => {
  return (
    <>
      <Header />
      <WrappedComponent />
    </>
  )
}
export default withLayout
