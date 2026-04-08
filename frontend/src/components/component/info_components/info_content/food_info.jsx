import "../../../../components/css/info_components/info_content.css";
import "../../../../components/css/info_components/RevolvingBorder.css";

import { MdAddchart } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


function FoodContent() {
    return (
        <main>
            <center>
                <div className="info_parent">


                    <div className="info_div2 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Quantity
                                    <div>
                                        <MdAddchart />
                                    </div>
                                </div>
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Chicken - 4</div>
                                    <div>Fish - 2</div>
                                    <div>Egg - 2</div>
                                    <div>Banana - 2</div>
                                    <div>Rusk - 4</div>
                                    <div>Paneer - 6</div>
                                    <div>Manchurian - 6</div>
                                    <div>Puri - 4</div>
                                    <div>Paratha - 4</div>
                                    <div>Bada - 4</div>
                                    <div>Veg Cutlet - 4</div>
                                    <div>Egg Omlet - 2</div>
                                </div>
                            </font>
                        </div>
                    </div>


                    <div className="info_div2 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Everyday
                                    <div>
                                        <FaRegCalendarCheck size={16} />
                                    </div>
                                </div>
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Mix Boiled Veg</div>
                                    <div>Pickel</div>
                                    <div>Onion</div>
                                    <div>Lemon</div>
                                    <div>Green Chilly</div>
                                    <div>Salt</div>
                                </div>
                            </font>
                        </div>
                    </div>


                    <div className="info_div2 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Occasionally
                                    <div>
                                        <FaRegStar />
                                    </div>
                                </div>
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                        </div>
                        <div className="menu_sub_part_div3">
                            <font className='font_menu_description'>
                                <div className="food_one_by_one">
                                    <div>Sugar (When Curd is Served)</div>
                                </div>
                            </font>
                        </div>
                    </div>

                </div>
            </center>
        </main>
    );
}

export default FoodContent;
