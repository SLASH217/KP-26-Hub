import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

import "../../../css/bus_components/content.css";

export const allBusesCam = [
    //Campus 25
    { id: 1, from: "H", to: "C 25", time: { h: 7, m: 35 }, busNo: "32" },
    { id: 2, from: "H", to: "C 25", time: { h: 8, m: 35 }, busNo: "32" },
    { id: 3, from: "H", to: "C 25", time: { h: 9, m: 35 }, busNo: "32" },
    { id: 4, from: "H", to: "C 25", time: { h: 10, m: 35 }, busNo: "72" },
    { id: 5, from: "C 25", to: "H", time: { h: 11, m: 10 }, busNo: "15" },
    { id: 6, from: "H", to: "C 25", time: { h: 11, m: 35 }, busNo: "15" },
    { id: 7, from: "C 25", to: "H", time: { h: 12, m: 10 }, busNo: "32" },
    { id: 8, from: "C 25", to: "H", time: { h: 13, m: 10 }, busNo: "32" },
    { id: 9, from: "C 25", to: "H", time: { h: 13, m: 10 }, busNo: "Mini" },
    { id: 10, from: "H", to: "C 25", time: { h: 13, m: 35 }, busNo: "15" },
    { id: 11, from: "C 25", to: "H", time: { h: 14, m: 10 }, busNo: "15" },
    { id: 12, from: "C 25", to: "H", time: { h: 14, m: 10 }, busNo: "72" },
    { id: 13, from: "H", to: "C 25", time: { h: 14, m: 35 }, busNo: "72" },
    { id: 14, from: "H", to: "C 25", time: { h: 14, m: 35 }, busNo: "15" },
    { id: 15, from: "H", to: "C 25", time: { h: 15, m: 30 }, busNo: "32" },
    { id: 16, from: "C 25", to: "H", time: { h: 16, m: 15 }, busNo: "22" },
    { id: 17, from: "C 25", to: "H", time: { h: 17, m: 10 }, busNo: "72" },
    { id: 18, from: "C 25", to: "H", time: { h: 17, m: 10 }, busNo: "Mini" },
    { id: 19, from: "C 25", to: "H", time: { h: 18, m: 15 }, busNo: "22" },
    { id: 20, from: "C 25", to: "H", time: { h: 18, m: 15 }, busNo: "32" },

    //Campus 3
    { id: 31, from: "H", to: "C 3", time: { h: 8, m: 35 }, busNo: "Mini" },
    { id: 32, from: "H", to: "C 3", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 33, from: "H", to: "C 3", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 34, from: "C 3", to: "H", time: { h: 14, m: 10 }, busNo: "32" },
    { id: 35, from: "H", to: "C 3", time: { h: 15, m: 35 }, busNo: "Mini" },
    { id: 36, from: "C 3", to: "H", time: { h: 18, m: 10 }, busNo: "Mini" },


    //Campus 7
    { id: 41, from: "H", to: "C 7", time: { h: 7, m: 35 }, busNo: "22" },
    { id: 42, from: "H", to: "C 7", time: { h: 8, m: 35 }, busNo: "22" },
    { id: 43, from: "H", to: "C 7", time: { h: 8, m: 35 }, busNo: "Mini" },
    { id: 44, from: "H", to: "C 7", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 45, from: "H", to: "C 7", time: { h: 10, m: 35 }, busNo: "22" },
    { id: 46, from: "H", to: "C 7", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 47, from: "C 7", to: "H", time: { h: 11, m: 30 }, busNo: "22" },
    { id: 48, from: "C 7", to: "H", time: { h: 13, m: 30 }, busNo: "22" },
    { id: 49, from: "C 7", to: "H", time: { h: 14, m: 10 }, busNo: "32" },
    { id: 50, from: "H", to: "C 7", time: { h: 14, m: 20 }, busNo: "22" },
    { id: 51, from: "H", to: "C 7", time: { h: 15, m: 35 }, busNo: "Mini" },
    { id: 52, from: "C 7", to: "H", time: { h: 15, m: 30 }, busNo: "22" },
    { id: 53, from: "C 7", to: "H", time: { h: 17, m: 10 }, busNo: "22" },

    //Campus 8
    { id: 61, from: "H", to: "C 8", time: { h: 7, m: 35 }, busNo: "22" },
    { id: 62, from: "H", to: "C 8", time: { h: 8, m: 35 }, busNo: "22" },
    { id: 63, from: "H", to: "C 8", time: { h: 8, m: 35 }, busNo: "Mini" },
    { id: 64, from: "H", to: "C 8", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 65, from: "H", to: "C 8", time: { h: 10, m: 35 }, busNo: "22" },
    { id: 66, from: "H", to: "C 8", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 67, from: "C 8", to: "H", time: { h: 11, m: 30 }, busNo: "22" },
    { id: 68, from: "C 8", to: "H", time: { h: 14, m: 10 }, busNo: "32" },
    { id: 69, from: "H", to: "C 8", time: { h: 14, m: 20 }, busNo: "22" },
    { id: 70, from: "H", to: "C 8", time: { h: 15, m: 35 }, busNo: "Mini" },
    { id: 71, from: "C 8", to: "H", time: { h: 17, m: 10 }, busNo: "22" },

    //Campus 15
    { id: 81, from: "H", to: "C 15", time: { h: 7, m: 35 }, busNo: "22" },
    { id: 82, from: "H", to: "C 15", time: { h: 8, m: 35 }, busNo: "22" },
    { id: 83, from: "H", to: "C 15", time: { h: 8, m: 35 }, busNo: "Mini" },
    { id: 84, from: "H", to: "C 15", time: { h: 9, m: 20 }, busNo: "15" },
    { id: 85, from: "H", to: "C 15", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 86, from: "H", to: "C 15", time: { h: 10, m: 35 }, busNo: "22" },
    { id: 87, from: "H", to: "C 15", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 88, from: "C 15", to: "H", time: { h: 11, m: 30 }, busNo: "22" },
    { id: 89, from: "C 15", to: "H", time: { h: 13, m: 25 }, busNo: "22" },
    { id: 90, from: "C 15", to: "H", time: { h: 14, m: 10 }, busNo: "32" },
    { id: 91, from: "H", to: "C 15", time: { h: 14, m: 20 }, busNo: "22" },
    { id: 92, from: "H", to: "C 15", time: { h: 15, m: 35 }, busNo: "Mini" },
    { id: 93, from: "C 15", to: "H", time: { h: 17, m: 10 }, busNo: "22" },
];

function AllBusContent() {
    const [selectedCampus, setSelectedCampus] = useState("");

    // Extract all unique campus names except H
    const campuses = [
        ...new Set(
            allBusesCam.flatMap((bus) => {
                const all = [...bus.from.split(","), ...bus.to.split(",")].map((c) => c.trim());
                return all.filter((c) => c.startsWith("C")); // ignore H
            })
        ),
    ];

    // Format campus names like Campus 25
    const campusNames = campuses.reduce((acc, campus) => {
        acc[campus] = "Campus " + campus.replace("C", "").trim();
        return acc;
    }, {});

    // Filter buses: match campus inside comma-separated values
    const filteredBuses = selectedCampus
        ? allBusesCam
            .filter((bus) => {
                const fromList = bus.from.split(",").map((c) => c.trim());
                const toList = bus.to.split(",").map((c) => c.trim());
                return (
                    fromList.includes(selectedCampus) ||
                    toList.includes(selectedCampus)
                );
            })
            .sort((a, b) => a.time.h * 60 + a.time.m - (b.time.h * 60 + b.time.m))
        : [];

    return (
        <main>
            <center>
                <div style={{ margin: "20px 0" }} className="select-wrapper">
                    <select
                        value={selectedCampus}
                        onChange={(e) => setSelectedCampus(e.target.value)}
                        className="drop_down_menu custom-select"
                    >
                        <option value="">Select Campus</option>
                        {campuses.map((campus, index) => (
                            <option key={index} value={campus}>
                                {campusNames[campus]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="menu_parent">
                    {!selectedCampus ? (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            Please select a campus to view buses
                        </div>
                    ) : filteredBuses.length === 0 ? (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            No buses available for this campus
                        </div>
                    ) : (
                        filteredBuses.map((bus) => {
                            const t = new Date();
                            t.setHours(bus.time.h, bus.time.m, 0, 0);
                            return (
                                <motion.div
                                    key={`${selectedCampus}-${bus.id}`}
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
                                                {`${bus.time.h
                                                    .toString()
                                                    .padStart(2, "0")}:${bus.time.m
                                                        .toString()
                                                        .padStart(2, "0")}`}
                                            </font>
                                        </div>
                                        <div className="menu_sub_part_div3">
                                            <div className="bus_number_section">
                                                <div>
                                                    <font className="font_menu_description">
                                                        Bus no:
                                                    </font>
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
                    )}
                </div>
            </center>
        </main>
    );
}

export default AllBusContent;
