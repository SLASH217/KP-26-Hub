import { Link } from "react-router-dom";

import '../../../css/food_components/day_title.css'

function DayTitleMonday() {
    return (
        <main>
            <center>
                <div className='day_title_parent'>
                    <Link to="/sunday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Sun
                            </font>
                        </div>
                    </Link>
                    <Link to="/monday" className="no-highlight">
                        <div className='day_title_all day_title_active'>
                            <font className='page_nav_font_food_active'>
                                Mon
                            </font>
                        </div>
                    </Link>
                    <Link to="/tuesday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Tue
                            </font>
                        </div>
                    </Link>
                    <Link to="/wednesday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Wed
                            </font>
                        </div>
                    </Link>
                    <Link to="/thursday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Thu
                            </font>
                        </div>
                    </Link>
                    <Link to="/friday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Fri
                            </font>
                        </div>
                    </Link>
                    <Link to="/saturday" className="no-highlight">
                        <div className='day_title_all'>
                            <font className='page_nav_font_food'>
                                Sat
                            </font>
                        </div>
                    </Link>
                </div>
            </center>
        </main>
    );
}

export default DayTitleMonday;