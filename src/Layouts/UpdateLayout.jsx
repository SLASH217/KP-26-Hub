import { Outlet } from 'react-router-dom';
import AppName from '../components/component/app_name.jsx';
import FooterUpdate from '../components/component/footer/footer_update.jsx';

export function UpdateLayout() {
  return (
    <main>
      <AppName />
      <Outlet />
      <br /><br /><br /><br />
      <FooterUpdate />
    </main>
  );
}
