import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DiNITSignUp from "./pages/DiNITSignUp";
import VerificationCode from "./pages/VerificationCode";
import ViewCart from "./pages/ViewCart";
import PlaceOrder from "./pages/PlaceOrder";
import ViewCart1 from "./pages/ViewCart1";
import MoxieOrderPage from "./pages/MoxieOrderPage";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/verification-code":
        title = "";
        metaDescription = "";
        break;
      case "/view-cart1":
        title = "";
        metaDescription = "";
        break;
      case "/place-order":
        title = "";
        metaDescription = "";
        break;
      case "/view-cart":
        title = "";
        metaDescription = "";
        break;
      case "/moxie-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DiNITSignUp />} />

      <Route path="/verification-code" element={<VerificationCode />} />

      <Route path="/view-cart1" element={<ViewCart />} />

      <Route path="/place-order" element={<PlaceOrder />} />

      <Route path="/view-cart" element={<ViewCart1 />} />

      <Route path="/moxie-order-page" element={<MoxieOrderPage />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
