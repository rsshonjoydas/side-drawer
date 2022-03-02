/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
import DrawerToggleButton from '../SideDrawer/DowerToggleButton'

const Toolbar = ({ drawerToggle }) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton drawerToggle={drawerToggle} />
      </div>
      <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar