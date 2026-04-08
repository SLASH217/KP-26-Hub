import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";

import dosa from '../../../../assets/food_images/dosa.webp';
import sambar from '../../../../assets/food_images/sambar.webp';
import chutney from '../../../../assets/food_images/chutney.webp';
import bread from '../../../../assets/food_images/bread.webp';
import jam from '../../../../assets/food_images/jam.webp';
import butter from '../../../../assets/food_images/butter.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';
import coffee from '../../../../assets/food_images/coffee.webp';

import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import rice_lemon from '../../../../assets/food_images/rice_lemon.webp';
import egg_m from '../../../../assets/food_images/egg_m.webp';
import veg_j from '../../../../assets/food_images/veg_j.webp';
import salad from '../../../../assets/food_images/salad.webp';
import frimes from '../../../../assets/food_images/frimes.webp';

import papdi_c from '../../../../assets/food_images/papdi_c.webp';

import rice from '../../../../assets/food_images/rice.webp';
import chicken_hydrabadi from '../../../../assets/food_images/chicken_hydrabadi.webp';
import paneer_hydrabadi from '../../../../assets/food_images/paneer_hydrabadi.webp';
import rice_kheer from '../../../../assets/food_images/rice_kheer.webp';

function SundayContent() {
    const breakfast = [
        { start: "07:00", end: "10:00" }
    ];
    const lunch = [
        { start: "13:00", end: "15:00" }
    ];
    const Snacks = [
        { start: "18:00", end: "19:00" }
    ];
    const Dinner = [
        { start: "20:00", end: "22:00" }
    ];



    const [sunday_bf, setsunday_bf] = useState(false);
    const screenRef_sunday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_bf.current && !screenRef_sunday_bf.current.contains(e.target)) {
                setsunday_bf(false);
            }
        }

        if (sunday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_bf]);


    const [sunday_l, setsunday_l] = useState(false);
    const screenRef_sunday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_l.current && !screenRef_sunday_l.current.contains(e.target)) {
                setsunday_l(false);
            }
        }

        if (sunday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_l]);


    const [sunday_s, setsunday_s] = useState(false);
    const screenRef_sunday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_s.current && !screenRef_sunday_s.current.contains(e.target)) {
                setsunday_s(false);
            }
        }

        if (sunday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_s]);


    const [sunday_d, setsunday_d] = useState(false);
    const screenRef_sunday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_sunday_d.current && !screenRef_sunday_d.current.contains(e.target)) {
                setsunday_d(false);
            }
        }

        if (sunday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sunday_d]);






    return (
        <main>
            <center>
                <div className="menu_parent">


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_bf(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Breakfast
                                <div>
                                    <PiBread />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Masala Dosa</div>
                                    <div>Sambar</div>
                                    <div>Chutney</div>
                                    <div>Bread</div>
                                    <div>Jam</div>
                                    <div>Butter</div>
                                    <div>Coffee</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_bf}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Breakfast at First Light
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={dosa}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Masala Dosa
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={sambar}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Sambar
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={chutney}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chutney
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={bread}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Bread
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={jam}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Jam
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={butter}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Butter
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={coffee}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Coffee
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_l(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Lunch
                                <div>
                                    <PiBowlFood />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Lemon Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Egg Masala</div>
                                    <div>Veg Kima Masala</div>
                                    <div>Salad</div>
                                    <div>Frimes</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_l}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        The Afternoon Lunch Table
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={lunch} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={rice_lemon}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Lemon Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={roti}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Roti
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={dal}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dal
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={boil_v}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Mix Boiled Veg
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={egg_m}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Egg Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={veg_j}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Veg Kima Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={salad}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Salad
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={frimes}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Frimes
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_s(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Snacks
                                <div>
                                    <BsCupHot size={16} />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Dahi Papdi Chaat</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_s}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Light Bites & Snacks
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={papdi_c}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dahi Papdi Chaat
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={milk_tea}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Tea
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsunday_d(true)}>
                        <font className='font_menu_title_name'>
                            <div className="menu_sub_part_div1">
                                Dinner
                                <div>
                                    <LiaCookieSolid />
                                </div>
                            </div>
                        </font>
                        <div className="menu_sub_part_div2">
                            <font className='font_menu_time'>
                                <Schedule dayIndex={0} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Chicken Hyderabadi</div>
                                    <div>Paneer Hyderabadi</div>
                                    <div>Rice Kheer</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {sunday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_sunday_d}>
                                <div className="overlay_food_title">
                                    <font className='font_menu_title_name'>
                                        Elegant Evening Dinner
                                    </font>
                                </div>
                                <div className="overlay_time_div">
                                    <div className="menu_itrms_overlay">
                                        <div className="menu_itrms_overlay_icon">
                                            <ImSpoonKnife />
                                        </div>
                                        Menu Items
                                    </div>
                                    <div>
                                        <font className='font_menu_time'>
                                            <Schedule dayIndex={0} timeSlots={Dinner} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={rice}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Rice
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={roti}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Roti
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={dal}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dal
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={boil_v}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Mix Boiled Veg
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={chicken_hydrabadi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chicken Hyderabadi
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={paneer_hydrabadi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Hyderabadi
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={rice_kheer}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Rice Kheer
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                </div>

            </center>
        </main>
    );
}

export default SundayContent;
