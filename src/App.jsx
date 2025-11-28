// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";

// Layout
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import HomeLayout from "./components/HomeLayout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import WriteForUsPage from "./pages/WriteForUsPage";

function App() {
  return (
    <Provider store={store}>
            <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <SearchBar />
        {/* Routes */}
            <HomeLayout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
                <HomePage />
              } />

            <Route path="/search" element={
              <SearchPage />
            } />

            <Route path="/:categoryslug" element={
              <CategoryPage />
            } />

            <Route path="/:categoryslug/:blogslug" element={
              <BlogPage />
            } />

            <Route path="/write-for-us" element={
              <WriteForUsPage />
            } />

          </Routes>
            </HomeLayout>       

        {/* Footer */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
