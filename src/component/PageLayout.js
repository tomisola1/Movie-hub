import NavBar from "../component/Navbar/Navbar";
import PaginationComponent from "./Pagination/Pagination";

const Layout = ({ children }) => {
  //   const [page, setPage] = useState(1);

  return (
    <>
      <NavBar />
      {children}
      {/* <PaginationComponent /> */}
    </>
  );
};

export default Layout;
