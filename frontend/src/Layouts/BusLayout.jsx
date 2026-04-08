import { Outlet } from 'react-router-dom';
import AppName from '../components/component/app_name.jsx';
import HeaderBus from '../components/component/header/header_bus.jsx'
import FooterBus from '../components/component/footer/footer_bus.jsx'
import SwipePage from "../Pages/features/SwipePage_Bus";
import NowAllTitle from '../components/component/bus_components/bus_title/now_all_title__now.jsx';

function BusLayout() {
  return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderBus />
                <NowAllTitle />
                <Outlet />
                <br /><br /><br /><br />
                <FooterBus />
            </main>
        </SwipePage>
  );
}

export { BusLayout };

