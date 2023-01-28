import NavBar from "../component/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
