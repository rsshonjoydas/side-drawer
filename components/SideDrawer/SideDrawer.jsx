/* eslint-disable react/destructuring-assignment */
const SideDrawer = ({ sideDrawerIsOpen, drawerToggle }) => {
  let drawerClasses = ['side-drawer']

  if (sideDrawerIsOpen) {
    drawerClasses = ['side-drawer open']
  }

  return (
    <div className={drawerClasses}>
      <button type="button" onClick={drawerToggle}>X</button>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Users</a></li>
      </ul>
    </div>
  )
}

export default SideDrawer