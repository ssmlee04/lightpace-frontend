import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import Footer from './../../system/components/Footer'
import Navbar from './../../system/components/Navbar'
import Popups from './../../system/components/Popups'
// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <Navbar />
      <Popups />
      <div className='view-container'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

const mapStateToProps = (state) => ({
  // user: state.user
})
export default connect((mapStateToProps), {
  // login, fetchProfile
})(CoreLayout)

