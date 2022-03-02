/* eslint-disable jsx-a11y/no-static-element-interactions */

const Backdrop = ({ backdropToggle }) => (
  <div className="fixed w-full h-full top-0 left-0 z-auto bg-black-rgba" onClick={backdropToggle} />
)

export default Backdrop