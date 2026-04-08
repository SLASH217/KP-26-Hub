import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";
import { useEffect, useRef, useState } from "react";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

import { ImSpoonKnife } from "react-icons/im";


import bada from '../../../../assets/food_images/bada.webp';
import ghuguni from '../../../../assets/food_images/ghuguni.webp';
import corn_flakes from '../../../../assets/food_images/corn_flakes.webp';
import milk from '../../../../assets/food_images/milk.webp';
import banana from '../../../../assets/food_images/banana.webp';
import milk_tea from '../../../../assets/food_images/milk_tea.webp';

import rice from '../../../../assets/food_images/rice.webp';
import roti from '../../../../assets/food_images/roti.webp';
import dal from '../../../../assets/food_images/dal.webp';
import boil_v from '../../../../assets/food_images/boil_v.webp';
import veg_man from '../../../../assets/food_images/veg_man.webp';
import alu_gobi from '../../../../assets/food_images/alu_gobi.webp';
import alu_bhindi from '../../../../assets/food_images/alu_bhindi.webp';
import curd from '../../../../assets/food_images/curd.webp';

import sprouts from '../../../../assets/food_images/sprouts.webp';
import maggi from '../../../../assets/food_images/maggi.webp';

import egg_m from '../../../../assets/food_images/egg_m.webp';
import parwal_k from '../../../../assets/food_images/parwal_k.webp';
import paneer_k from '../../../../assets/food_images/paneer_k.webp';
import malpua from '../../../../assets/food_images/malpua.webp';



function ThursdayContent() {
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




    const [thursday_bf, setthursday_bf] = useState(false);
    const screenRef_thursday_bf = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_thursday_bf.current && !screenRef_thursday_bf.current.contains(e.target)) {
                setthursday_bf(false);
            }
        }

        if (thursday_bf) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [thursday_bf]);


    const [thursday_l, setthursday_l] = useState(false);
    const screenRef_thursday_l = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_thursday_l.current && !screenRef_thursday_l.current.contains(e.target)) {
                setthursday_l(false);
            }
        }

        if (thursday_l) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [thursday_l]);


    const [thursday_s, setthursday_s] = useState(false);
    const screenRef_thursday_s = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_thursday_s.current && !screenRef_thursday_s.current.contains(e.target)) {
                setthursday_s(false);
            }
        }

        if (thursday_s) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [thursday_s]);


    const [thursday_d, setthursday_d] = useState(false);
    const screenRef_thursday_d = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef_thursday_d.current && !screenRef_thursday_d.current.contains(e.target)) {
                setthursday_d(false);
            }
        }

        if (thursday_d) {
            document.body.style.overflow = "hidden"; // disable background scroll
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [thursday_d]);






    return (
        <main>
            <center>
                <div className="menu_parent">


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setthursday_bf(true)}>
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
                                <Schedule dayIndex={4} timeSlots={breakfast} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Bada</div>
                                    <div>Ghuguni</div>
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


                    {thursday_bf && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_thursday_bf}>
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
                                            <Schedule dayIndex={4} timeSlots={breakfast} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={bada}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Bada
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={ghuguni}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Ghuguni
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setthursday_l(true)}>
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
                                <Schedule dayIndex={4} timeSlots={lunch} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Veg Manchurian</div>
                                    <div>Alu Gobi Bhaji / Alu Bhindi Bhaji</div>
                                    <div>Curd</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {thursday_l && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_thursday_l}>
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
                                            <Schedule dayIndex={4} timeSlots={lunch} />
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
                                            src={veg_man}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Veg Manchurian
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={alu_gobi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Alu Gobi Bhaji
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={alu_bhindi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Alu Bhindi Bhaji
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={curd}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Curd
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setthursday_s(true)}>
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
                                <Schedule dayIndex={4} timeSlots={Snacks} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Boil Sprout / Masala Maggi</div>
                                    <div>Tea</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {thursday_s && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_thursday_s}>
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
                                            <Schedule dayIndex={4} timeSlots={Snacks} />
                                        </font>
                                    </div>
                                </div>
                                <div className="food_images_parent">
                                    <div className="food_images_individual">
                                        <img
                                            src={sprouts}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Boil Sprout
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={maggi}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Masala Maggi
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


                    <div className="menu_div1 menu_menu_only no-highlight" onClick={() => setthursday_d(true)}>
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
                                <Schedule dayIndex={4} timeSlots={Dinner} />
                            </font>
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Rice</div>
                                    <div>Roti</div>
                                    <div>Dal</div>
                                    <div>Mix Boiled Veg</div>
                                    <div>Egg Masala Fry</div>
                                    <div>Parwal Korma / Paneer Korma</div>
                                    <div>Malpua</div>
                                </div>
                            </font>
                        </div>
                        <div className="click_text">
                            <label>Quick View</label>
                        </div>
                    </div>


                    {thursday_d && (
                        <div className="overlay">
                            <div className="mini_screen" ref={screenRef_thursday_d}>
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
                                            <Schedule dayIndex={4} timeSlots={Dinner} />
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
                                                Egg Masala Fry
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={parwal_k}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Parwal Korma
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={paneer_k}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Paneer Korma
                                            </font>
                                        </div>
                                    </div>
                                    <div className="food_images_individual">
                                        <img
                                            src={malpua}
                                            alt="food"
                                            className='food_image_image'
                                            loading="lazy"
                                        />
                                        <div className="food_name_div">
                                            <font className='font_menu_description_over'>
                                                Malpua
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

export default ThursdayContent;
