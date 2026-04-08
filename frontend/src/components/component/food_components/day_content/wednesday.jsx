import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";


import egg_omelet from '../../../../assets/food_images/egg_omelet.webp';
import cutlet from '../../../../assets/food_images/cutlet.webp';
import bread from '../../../../assets/food_images/bread.webp';
import jam from '../../../../assets/food_images/jam.webp';
import butter from '../../../../assets/food_images/butter.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';

import rice from '../../../../assets/food_images/rice.webp';
import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import cabbage from '../../../../assets/food_images/cabbage.webp';
import fish_masala from '../../../../assets/food_images/fish_masala.webp';
import salad from '../../../../assets/food_images/salad.webp';

import veg_c from '../../../../assets/food_images/veg_c.webp';
import coffee from '../../../../assets/food_images/coffee.webp';

import chicken_pun from '../../../../assets/food_images/chicken_pun.webp';
import paneer_pun from '../../../../assets/food_images/paneer_pun.webp';
import gulab_jamun from '../../../../assets/food_images/gulab_jamun.webp';


function WednesdayContent() {
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



    const [wednesday_bf, setwednesday_bf] = useState(false);
    const screenRef_wednesday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_wednesday_bf.current && !screenRef_wednesday_bf.current.contains(e.target)) {
                setwednesday_bf(false);
            }
        }

        if (wednesday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wednesday_bf]);


    const [wednesday_l, setwednesday_l] = useState(false);
    const screenRef_wednesday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_wednesday_l.current && !screenRef_wednesday_l.current.contains(e.target)) {
                setwednesday_l(false);
            }
        }

        if (wednesday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wednesday_l]);


    const [wednesday_s, setwednesday_s] = useState(false);
    const screenRef_wednesday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_wednesday_s.current && !screenRef_wednesday_s.current.contains(e.target)) {
                setwednesday_s(false);
            }
        }

        if (wednesday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wednesday_s]);


    const [wednesday_d, setwednesday_d] = useState(false);
    const screenRef_wednesday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_wednesday_d.current && !screenRef_wednesday_d.current.contains(e.target)) {
                setwednesday_d(false);
            }
        }

        if (wednesday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wednesday_d]);





    return (
        <main>
            <center>
                <div className="menu_parent">


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setwednesday_bf(true)}>
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
                                <Schedule dayIndex={3} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Egg Omelet</div>
                                    <div>Veg Cutlet</div>
                                    <div>Bread</div>
                                    <div>Jam</div>
                                    <div>Butter</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {wednesday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_wednesday_bf}>
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
                                            <Schedule dayIndex={3} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={egg_omelet}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Egg Omelet
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={cutlet}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Veg Cutlet
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setwednesday_l(true)}>
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
                                <Schedule dayIndex={3} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Cabbage Alu Masala</div>
                                    <div>Fish Masala</div>
                                    <div>Salad</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {wednesday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_wednesday_l}>
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
                                            <Schedule dayIndex={3} timeSlots={lunch} />
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
                                            src={cabbage}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Cabbage Alu Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={fish_masala}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Fish Masala
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
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setwednesday_s(true)}>
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
                                <Schedule dayIndex={3} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Noodles</div>
                                    <div>Coffee</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {wednesday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_wednesday_s}>
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
                                            <Schedule dayIndex={3} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={veg_c}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Noodlea
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setwednesday_d(true)}>
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
                                <Schedule dayIndex={3} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Chicken Punjabi</div>
                                    <div>Paneer Punjabi</div>
                                    <div>Gulab Jamun</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {wednesday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_wednesday_d}>
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
                                            <Schedule dayIndex={3} timeSlots={Dinner} />
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
                                            src={chicken_pun}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chicken Punjabi
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={paneer_pun}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Punjabi
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={gulab_jamun}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Gulab Jamun
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

export default WednesdayContent;
