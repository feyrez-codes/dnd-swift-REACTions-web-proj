export function MainBodyPop(){
  return(
    <div>
      <div>
        <h3>Hello, Adventurer!</h3>
        <p>Select a location from the map below to learn more about the campaign's adventure!
          For a more detailed map, visit the <a>Eberron Map</a> page!
        </p>
      </div>
      <div>
        <img src="../src/assets/eberron_map_unmarked_img.jpg" className="eberron-map" />
        <img src="../src/assets/old_scroll_img.png" className="map-label"/>
        <div className="description-box"></div>
      </div>
    </div>
  )
}
