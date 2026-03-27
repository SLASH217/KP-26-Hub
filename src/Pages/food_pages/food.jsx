import DayTitleNormal from '../../components/component/food_components/day_title/normal.jsx';

import dayjs from "dayjs";
import { Navigate } from "react-router-dom";

function Food() {
    const days = dayjs().format("dddd").toLowerCase();

    return (
        <>
            <DayTitleNormal />
            <Navigate to={`/${days}`} />
        </>
    );
}

export default Food;

