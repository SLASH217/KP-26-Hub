import { Outlet } from 'react-router-dom';
import AppName from '../components/component/app_name.jsx';
import FooterHostel from '../components/component/footer/footer_hostel.jsx';

export function HostelLayout() {
  return (
    <main>
      <AppName />
      <Outlet />
      <br /><br /><br /><br />
      <FooterHostel />
    </main>
  );
}
