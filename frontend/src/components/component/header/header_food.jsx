import '../../css/header.css'

function HeaderFood(){
    return(
        <main>
            <div className="header_parent">
                <div className="header_hostel_name">
                    <font className='font_for_hostel_name'>
                        Kings Palace - 26
                    </font>
                </div>
                <div className="header_title">
                    <font className='font_for_header_title'>
                        Mess Menu
                    </font>
                </div>
            </div>
        </main>
    );
}

export default HeaderFood;