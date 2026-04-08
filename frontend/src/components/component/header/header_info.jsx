import '../../css/header.css'

function HeaderInfo(){
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
                        Information
                    </font>
                </div>
            </div>
        </main>
    );
}

export default HeaderInfo;