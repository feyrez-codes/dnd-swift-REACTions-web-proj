import { MapLocationOptions } from "../mainPageLocationOptions"

function LocationSelector(){
  const location = 0
  if(location === 0){
    return(
      <div className="map-banner-textbox">
        <p className="map-label-text" font-size={MapLocationOptions[location].font}>{MapLocationOptions[0].name}</p>
        {MapLocationOptions[location].description}
    </div>
    )
  }

}

export function MainBodyPop(){
  return(
    <div>
      <div>
        <h3>Hello, Adventurer!</h3>
      </div>
      <div>
        <img src="../src/assets/eberron_map_unmarked_img.jpg" className="eberron-map" />
        <img src="../src/assets/old_scroll_img.png" className="map-label"/>
      </div>
      <LocationSelector />
    </div>
  )
}
