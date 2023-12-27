import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {/* Cancel out the loading icon for now, items load too fast and it looks weird. */}
      {/* {isLoading && <Loader />} */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default AppLayout;
