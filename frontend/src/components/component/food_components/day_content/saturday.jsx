import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";


import paratha from '../../../../assets/food_images/paratha.webp';
import bhaji from '../../../../assets/food_images/bhaji.webp';
import aalu_kasha from '../../../../assets/food_images/aalu_kasha.webp';
import pickel from '../../../../assets/food_images/pickel.webp';
import corn_flakes from '../../../../assets/food_images/corn_flakes.webp';
import milk from '../../../../assets/food_images/milk.webp';
import banana from '../../../../assets/food_images/banana.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';

import rice from '../../../../assets/food_images/rice.webp';
import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import egg_m from '../../../../assets/food_images/egg_m.webp';
import paneer_chana from '../../../../assets/food_images/paneer_chana.webp';
import alu_chokha from '../../../../assets/food_images/alu_chokha.webp';
import papad from '../../../../assets/food_images/papad.webp';

import chana_c from '../../../../assets/food_images/chana_c.webp';
import biscuit from '../../../../assets/food_images/biscuit.webp';

import chicken_bm from '../../../../assets/food_images/chicken_bm.webp';
import paneer_bm from '../../../../assets/food_images/paneer_bm.webp';
import rasgulla from '../../../../assets/food_images/rasgulla.webp';


function SaturdayContent() {
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




    const [saturday_bf, setsaturday_bf] = useState(false);
    const screenRef_saturday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_saturday_bf.current && !screenRef_saturday_bf.current.contains(e.target)) {
                setsaturday_bf(false);
            }
        }

        if (saturday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [saturday_bf]);


    const [saturday_l, setsaturday_l] = useState(false);
    const screenRef_saturday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_saturday_l.current && !screenRef_saturday_l.current.contains(e.target)) {
                setsaturday_l(false);
            }
        }

        if (saturday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [saturday_l]);


    const [saturday_s, setsaturday_s] = useState(false);
    const screenRef_saturday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_saturday_s.current && !screenRef_saturday_s.current.contains(e.target)) {
                setsaturday_s(false);
            }
        }

        if (saturday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [saturday_s]);


    const [saturday_d, setsaturday_d] = useState(false);
    const screenRef_saturday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_saturday_d.current && !screenRef_saturday_d.current.contains(e.target)) {
                setsaturday_d(false);
            }
        }

        if (saturday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [saturday_d]);






    return (
        <main>
            <center>
                <div className="menu_parent">

                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsaturday_bf(true)}>
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
                                <Schedule dayIndex={6} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Paratha</div>
                                    <div>Alu Kasha / Alu Bhaji</div>
                                    <div>Pickle</div>
                                    <div>Corn Flakes</div>
                                    <div>Milk</div>
                                    <div>Banana</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>

                    {saturday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_saturday_bf}>
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
                                            <Schedule dayIndex={6} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={paratha}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paratha
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={aalu_kasha}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Alu Kasha
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={bhaji}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Alu Bhaji
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={pickel}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Pickle
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={corn_flakes}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Corn Flakes
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={milk}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Milk
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={banana}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Banana
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsaturday_l(true)}>
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
                                <Schedule dayIndex={6} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Egg Masala</div>
                                    <div>Paneer Chana Masala</div>
                                    <div>Alu Chokha</div>
                                    <div>Papad</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {saturday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_saturday_l}>
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
                                            <Schedule dayIndex={6} timeSlots={lunch} />
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
                                            src={paneer_chana}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Chana Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={alu_chokha}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Alu Chokha
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={papad}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Papad
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsaturday_s(true)}>
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
                                <Schedule dayIndex={6} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Kala Chana Chaat / Biscuit</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {saturday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_saturday_s}>
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
                                            <Schedule dayIndex={6} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={chana_c}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Kala Chana Chaat
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={biscuit}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Biscuit
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setsaturday_d(true)}>
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
                                <Schedule dayIndex={6} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Chicken Butter Masala</div>
                                    <div>Paneer Butter Masala</div>
                                    <div>Rasgulla</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {saturday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_saturday_d}>
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
                                            <Schedule dayIndex={6} timeSlots={Dinner} />
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
                                            src={chicken_bm}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chicken Butter Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={paneer_bm}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Butter Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={rasgulla}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Rasgulla
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

export default SaturdayContent;
