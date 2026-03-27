import { Outlet } from 'react-router-dom';
import AppName from '../components/component/app_name.jsx';
import HeaderFood from '../components/component/header/header_food.jsx';

import FooterFood from '../components/component/footer/footer_food.jsx';

import SwipePage from "../Pages/features/SwipePage_Food";

function FoodLayout() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <Outlet />
                <FooterFood />
            </main>
        </SwipePage>
    );
}

export { FoodLayout };

