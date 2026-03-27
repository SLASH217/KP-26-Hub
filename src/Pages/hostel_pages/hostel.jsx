import HostelContent from '../../components/component/hostel_components/content.jsx';
import FooterHostel from '../../components/component/footer/footer_hostel.jsx';

import SwipePage from "../features/SwipePage_Food";

function Friday() {
    return (
        <SwipePage>
            <main>
                <HostelContent />
                <FooterHostel />
            </main>
        </SwipePage>
    );
}

export default Friday;
