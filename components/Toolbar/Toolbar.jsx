/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
import DrawerToggleButton from '../SideDrawer/DowerToggleButton'

const Toolbar = ({ drawerToggle }) => (
  <header className="fixed top-0 left-0 w-full h-12 bg-purple-400">
    <nav className="flex items-center h-full px-2">
      <div className="md:hidden">
        <DrawerToggleButton drawerToggle={drawerToggle} />
      </div>
      <div className="ml-2"><a className="text-yellow-100 font-bold text-lg" href="/">THE LOGO</a></div>
      <div className="flex-1" />
      <div className='hidden md:flex'>
        <ul className="m-0 p-0 flex">
          <li className='p-2'><a className="text-yellow-100 hover:text-sky-500" href="/">Products</a></li>
          <li className='p-2'><a className="text-yellow-100 hover:text-sky-500" href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar