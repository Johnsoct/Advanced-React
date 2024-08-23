import PropTypes from 'prop-types'
import Header from './Header'

export default function Page (props) {
  return (
    <div>
      <Header>
      </Header>
      <h2>_app level component</h2>
      {props.children}
    </div>
  )
}

Page.propTypes = {
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
  children: PropTypes.any,
}
