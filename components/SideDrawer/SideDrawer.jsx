/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideDrawer = ({ sideDrawerIsOpen, drawerToggle }) => {

  let drawerClasses = ['side-drawer']

  if (sideDrawerIsOpen) {
    drawerClasses = ['side-drawer open']
  }

  return (
    <div className={drawerClasses}>
      <button className='text-purple-300 absolute top-0 right-0 p-3' type="button" onClick={drawerToggle}>
        <FontAwesomeIcon className='h-8' icon={faXmark} />
      </button>
      <ul className='h-full flex justify-center ml-4 flex-col'>
        <li className='mt-2 '><a className='text-yellow-50 text-md hover:text-sky-300' href="/">Products</a></li>
        <li className='mt-2 '><a className='text-yellow-50 text-md hover:text-sky-300' href="/">Users</a></li>
      </ul>
    </div>
  )
}

export default SideDrawer