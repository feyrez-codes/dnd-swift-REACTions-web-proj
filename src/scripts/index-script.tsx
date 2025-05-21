import { createRoot } from 'react-dom/client';
import { LinkHandling } from './index-header-links';
import { NavPanelCreation } from './nav-panel';
import { MainBodyPop } from './index-body-content';
import '../stylesheets/globalstyling.css'

const mainContainer = document.getElementById('root');

const pageLayout = (
<div className='index-main-container'>
  <div className='i-main-header'>
    <img src="../src/assets/Necronom_img.webp" alt="" />
    <p>Fey's Fullstack D&D 5e Dashboard</p>
    <LinkHandling />
  </div>
  <div className='i-main-body'>
    <div className='i-main-nav'>
      <NavPanelCreation />
    </div>
    <MainBodyPop />
  </div>
</div>
);

createRoot(mainContainer!).render(pageLayout)