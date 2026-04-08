import { motion } from "framer-motion";

import "../../../components/css/info_components/info_content.css";
import "../../../components/css/info_components/RevolvingBorder.css";

// Convert "HH:MM AM/PM" → minutes since midnight
function convertToMinutes(timeString) {
    if (timeString === "All Day") return null; // special flag

    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
}

function UpdateContent() {
    const infoSections = [
        {
            id: 1,
            title: "App Update",
            description: "Click on the Breakfast, Lunch, Snacks, or Dinner sections to explore images of the meals currently being served.",
            active: false,
            startTime: "All Day",
            endTime: "",
        },
        {
            id: 2,
            title: "Attendance",
            description: "Give your biometric attendance between 8:00 PM and 11:00 PM",
            active: true,
            startTime: "08:00 PM",
            endTime: "11:00 PM",
        },
        {
            id: 3,
            title: "Transportation",
            description: "Buses are available only for examinations for the time being",
            active: false,
            startTime: "All Day",
            endTime: "",
        },
        {
            id: 3,
            title: "Shuttle Service",
            description: "Shuttle departs from the hostel at 9:00 PM for the Library",
            active: false,
            startTime: "05:00 PM",
            endTime: "9:00 PM",
        },
        {
            id: 4,
            title: "Railway Bus",
            description: "Bus no. 32 departs from the hostel at 12:00 PM for the railway station",
            active: false,
            startTime: "All Day",
            endTime: "",
        },
        {
            id: 5,
            title: "Airport Bus",
            description: "Bus no. 32 departs from the hostel at 12:00 PM for the airport departure point",
            active: false,
            startTime: "09:00 PM",
            endTime: "11:00 PM",
        }
    ];

    // Current time in minutes
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Filter based on time + active status
    const visibleSections = infoSections.filter(section => {
        if (!section.active) return false;

        // All day → always visible
        if (section.startTime === "All Day") return true;

        const start = convertToMinutes(section.startTime);
        const end = convertToMinutes(section.endTime);

        // If the time range crosses midnight (rare case)
        if (start > end) {
            return currentMinutes >= start || currentMinutes <= end;
        }

        return currentMinutes >= start && currentMinutes <= end;
    });

    return (
        <main>
            <center>
                <div className="info_parent">

                    {/* ✅ Show message if nothing is visible */}
                    {visibleSections.length === 0 ? (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            There are no updates at the moment
                        </div>
                    ) : null}

                    {/* Existing visible sections */}
                    {visibleSections.map(section => (
                        <motion.div
                            key={section.id}
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -200, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <div className="info_div2 info_info_background">
                                <div className="info_sub_part_div1">
                                    <font className="font_menu_title_name">
                                        {section.title}
                                    </font>
                                </div>

                                <div className="info_sub_part_div2"></div>

                                <div className="info_sub_part_div4">
                                    <font className="font_info_description">
                                        {section.description}
                                    </font>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </center>
        </main>
    );
}

export default UpdateContent;
