import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <footer>
        <hr />
        <p>this is the footer</p>
      </footer>
    </div>
  );
};
export default MainLayout;
