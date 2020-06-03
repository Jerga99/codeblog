



const FilteringMenu = ({onChange}) => {

  return (
    <div className="filtering-menu mb-2">
      <div onClick={() => {
        onChange();
      }}>
        Change View
      </div>
    </div>
  )
}

export default FilteringMenu;
