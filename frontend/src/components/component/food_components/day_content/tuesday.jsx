import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";


import chole from '../../../../assets/food_images/chole.webp';
import bhature from '../../../../assets/food_images/bhature.webp';
import boiled_egg from '../../../../assets/food_images/boiled_egg.webp';
import bread from '../../../../assets/food_images/bread.webp';
import jam from '../../../../assets/food_images/jam.webp';
import butter from '../../../../assets/food_images/butter.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';

import rice from '../../../../assets/food_images/rice.webp';
import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import kadai_veg from '../../../../assets/food_images/kadai_veg.webp';
import alu_chokha from '../../../../assets/food_images/alu_chokha.webp';
import dahai_bundi from '../../../../assets/food_images/dahai_bundi.webp';

import red_p from '../../../../assets/food_images/red_p.webp';
import chuda from '../../../../assets/food_images/chuda.webp';

import soya from '../../../../assets/food_images/soya.webp';
import veg_chips from '../../../../assets/food_images/veg_chips.webp';
import semai from '../../../../assets/food_images/semai.webp';



function TuesdayContent() {
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



    const [tuesday_bf, settuesday_bf] = useState(false);
    const screenRef_tuesday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_tuesday_bf.current && !screenRef_tuesday_bf.current.contains(e.target)) {
                settuesday_bf(false);
            }
        }

        if (tuesday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tuesday_bf]);


    const [tuesday_l, settuesday_l] = useState(false);
    const screenRef_tuesday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_tuesday_l.current && !screenRef_tuesday_l.current.contains(e.target)) {
                settuesday_l(false);
            }
        }

        if (tuesday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tuesday_l]);


    const [tuesday_s, settuesday_s] = useState(false);
    const screenRef_tuesday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_tuesday_s.current && !screenRef_tuesday_s.current.contains(e.target)) {
                settuesday_s(false);
            }
        }

        if (tuesday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tuesday_s]);


    const [tuesday_d, settuesday_d] = useState(false);
    const screenRef_tuesday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_tuesday_d.current && !screenRef_tuesday_d.current.contains(e.target)) {
                settuesday_d(false);
            }
        }

        if (tuesday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tuesday_d]);







    return (
        <main>
            <center>
                <div className="menu_parent">


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => settuesday_bf(true)}>
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
                                <Schedule dayIndex={2} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Chole</div>
                                    <div>Bhature</div>
                                    <div>Boiled Egg</div>
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

                    {tuesday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_tuesday_bf}>
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
                                            <Schedule dayIndex={2} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={chole}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Chole
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={bhature}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Bhature
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={boiled_egg}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Boiled Egg
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => settuesday_l(true)}>
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
                                <Schedule dayIndex={2} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Kadai Veg</div>
                                    <div>Alu Chokha</div>
                                    <div>Dahi Bundi</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {tuesday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_tuesday_l}>
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
                                            <Schedule dayIndex={2} timeSlots={lunch} />
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
                                            src={kadai_veg}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Kadai Veg
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
                                            src={dahai_bundi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Dahi Bundi
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => settuesday_s(true)}>
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
                                <Schedule dayIndex={2} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Red Pasta / Masala Chuda Mix</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {tuesday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_tuesday_s}>
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
                                            <Schedule dayIndex={2} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={red_p}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Red Pasta
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={chuda}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Masala Chuda Mix
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => settuesday_d(true)}>
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
                                <Schedule dayIndex={2} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Soyabean Alu Masala</div>
                                    <div>Crispy Veg Chips</div>
                                    <div>Semei Kheer</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {tuesday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_tuesday_d}>
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
                                            <Schedule dayIndex={2} timeSlots={Dinner} />
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
                                            src={soya}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Soyabean Alu Masala
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={veg_chips}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Crispy Veg Chips
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={semai}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Semei Kheer
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

export default TuesdayContent;
