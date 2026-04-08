import { Link } from "react-router-dom";


import { IoCallOutline } from "react-icons/io5";

import "../../../../components/css/info_components/info_content.css";
import "../../../../components/css/info_components/RevolvingBorder.css";

function ContactContent() {
    return (
        <main>
            <center>
                <div className="info_parent">


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Reception
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+918114377672" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 8114377672
                            </font>
                        </div>
                    </div>


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Madana
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+917978874274" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 7978874274
                            </font>
                        </div>
                    </div>


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Ananta
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+917473836490" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 7473836490
                            </font>
                        </div>
                    </div>


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Dipu
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+919861896984" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 9861896984
                            </font>
                        </div>
                    </div>


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Ajay
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+919776333782" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 9776333782
                            </font>
                        </div>
                    </div>


                    <div className="info_div1 info_info_background">
                        <div className="info_sub_part_div1">
                            <font className='font_menu_title_name'>
                                Pramod
                            </font>
                        </div>
                        <div className="info_sub_part_div2">
                            <Link to="tel:+919437415713" className="call_link no-highlight">
                                <div className="revolving-border">
                                    <IoCallOutline size={20} />
                                </div>
                            </Link>
                        </div>
                        <div className="info_sub_part_div3">
                            <font className='font_menu_description'>
                                +91 9437415713
                            </font>
                        </div>
                    </div>
                </div>

            </center>
        </main>
    );
}

export default ContactContent;
