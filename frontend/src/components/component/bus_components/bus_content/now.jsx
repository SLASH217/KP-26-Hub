import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

import "../../../css/bus_components/content.css";

import { allBusesCam } from "./all";
import { special_bus } from "./special_bus";
import { activeDaysConfig } from "../activeDaysConfig";

function NowActiveBuses() {
    const now = new Date();
    const day = now.getDay();
    const todayName = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ][day];

    const [campusFilter, setCampusFilter] = useState("");

    // Combine regular and special buses
    const regularBuses = [...(allBusesCam || []).map((b) => ({ ...b, campus: "All" }))];
    const todayBuses = activeDaysConfig[todayName] ? regularBuses : [];
    const allBuses = [
        ...todayBuses,
        ...(special_bus || []).map((b) => ({ ...b, campus: "SP B" })),
    ];

    // Active buses in the current time window
    const activeBuses = allBuses.filter((bus) => {
        const t = new Date();
        t.setHours(bus.time.h, bus.time.m, 0, 0);
        const diffMins = (t - now) / 60000;
        return diffMins <= 30 && diffMins >= -15;
    });

    // Get unique campuses from 'from' and 'to', ignoring 'H'
    const uniqueCampuses = [
        ...new Set(
            activeBuses
                .flatMap((bus) => [bus.from, bus.to])
                .filter((val) => val !== "H")
        ),
    ];

    // Filter buses by selected campus
    const filteredBuses = campusFilter
        ? activeBuses.filter(
            (bus) => bus.from === campusFilter || bus.to === campusFilter
        )
        : activeBuses;

    return (
        <main>
            <center>
                <div style={{ margin: "20px 0" }} className="select-wrapper">
                    <select
                        value={campusFilter}
                        onChange={(e) => setCampusFilter(e.target.value)}
                        className="drop_down_menu custom-select"
                    >
                        <option value="">All Campus</option>
                        {uniqueCampuses.map((campus, i) => (
                            <option key={i} value={campus}>
                                {campus.startsWith("C ") ? campus.replace("C ", "Campus ") : campus}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="menu_parent">
                    {filteredBuses.length > 0 ? (
                        filteredBuses
                            .sort(
                                (a, b) =>
                                    a.time.h * 60 + a.time.m - (b.time.h * 60 + b.time.m)
                            )
                            .map((bus) => {
                                const t = new Date();
                                t.setHours(bus.time.h, bus.time.m, 0, 0);
                                return (
                                    <motion.div
                                        key={`${bus.campus}-${bus.id}-${campusFilter}`} // triggers animation on campus change
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                        <div className="menu_div1 bus_bus_only">
                                            <div className="menu_sub_part_div1">
                                                <font className="font_menu_title_name">
                                                    <div className="from_to_arrow">
                                                        {bus.from}
                                                        <FaArrowRightLong />
                                                        {bus.to}
                                                    </div>
                                                </font>
                                            </div>
                                            <div className="menu_sub_part_div2">
                                                <font className="font_menu_time">
                                                    {`${bus.time.h.toString().padStart(2, "0")}:${bus.time.m
                                                        .toString()
                                                        .padStart(2, "0")}`}
                                                </font>
                                            </div>
                                            <div className="menu_sub_part_div3">
                                                <div className="bus_number_section">
                                                    <div>
                                                        <font className="font_menu_description">Bus no:</font>
                                                    </div>
                                                    <div className="bus_number">
                                                        <font className="font_bus_no">
                                                            <div className="colour">{bus.busNo}</div>
                                                        </font>
                                                    </div>
                                                </div>
                                                <div>
                                                    <font className="font_menu_time">
                                                        <BusTimer departureTime={t} />
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                    ) : (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            No active buses right now
                            {/* Buses are available only for examinations for the time being */}
                        </div>
                    )}
                </div>
            </center>
        </main>
    );
}

export default NowActiveBuses;
