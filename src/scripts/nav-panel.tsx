import { navPanelPageOptions, navPanelChangelog, navPanelMore } from "../navPanelOptions"

const PopNavPanelPages = ()=>{
  const navPanelWrite:React.ReactNode[] = [];
  navPanelPageOptions.forEach(element => {
    navPanelWrite.push(<li><a href={element.link}>{element.title} </a></li>)
  });
  return navPanelWrite;
}

const PopNavPanelChangelog = ()=>{
  const navPanelChangelogWrite:React.ReactNode[] = [];
  navPanelChangelog.forEach(element => {
    navPanelChangelogWrite.push(<li><a href={element.link}>{element.change} </a></li>
    )
  });
  return navPanelChangelogWrite;
}

const PopNavPanelMore = ()=>{
  const navPanelMoreWrite:React.ReactNode[] = [];
  navPanelMore.forEach(element => {
    navPanelMoreWrite.push(<li><a href={element.link}>{element.title} </a></li>
    )
  });
  return navPanelMoreWrite;
}

export function NavPanelCreation(){
  return(
    <div>
      <h3>Navigation</h3>
      <ul className="navpanel-parent-list">
        <PopNavPanelPages />
      </ul>
      <h3>Recent Changes</h3>
      <ul className="navpanel-parent-list">
      <PopNavPanelChangelog />
      </ul>
      <h3>More!</h3>
      <ul className="navpanel-parent-list">
      <PopNavPanelMore />
      </ul>

    </div>
  )}
