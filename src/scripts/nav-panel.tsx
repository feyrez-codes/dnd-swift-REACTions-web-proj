import { navPanel } from "../navPanelOptions"


const PopNavPanel = ()=>{
  const navPanelWrite:React.ReactNode[] = [];
  navPanel.forEach(element => {
    navPanelWrite.push(<li><a href={element.link}>{element.title}</a></li>)
  });
  return navPanelWrite;
}


export function NavPanelCreation(){
  return(
    <div>
      <h3>Navigation</h3>
      <ul>
        {PopNavPanel()}
      </ul>
    </div>
  )}
