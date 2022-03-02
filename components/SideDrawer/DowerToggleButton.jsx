const DowerToggleButton = ({ drawerToggle }) => (
  <button type="button" className="flex flex-col justify-around h-6 w-7 bg-transparent p-0 box-border" onClick={drawerToggle}>
    <div className="w-11/12 h-1 bg-yellow-50" />
    <div className="w-11/12 h-1 bg-yellow-50" />
    <div className="w-11/12 h-1 bg-yellow-50" />
  </button>
)

export default DowerToggleButton