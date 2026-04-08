import { Outlet } from 'react-router-dom';
import AppName from '../components/component/app_name.jsx';
import HeaderInfo from '../components/component/header/header_info.jsx';
import FooterInfo from '../components/component/footer/footer_info.jsx';

export function InfoLayout() {
  return (
    <main>
      <AppName />
      <HeaderInfo />
      <Outlet />
      <br /><br /><br /><br />
      <FooterInfo />
    </main>
  );
}
