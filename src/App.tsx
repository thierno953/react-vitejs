import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ScrollToTop from "./helpers/scrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
