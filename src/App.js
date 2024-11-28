import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import SummaryApi from './common';
import Footer from './components/Footer';
import Header from './components/Header';
import Context from './context';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  /**
   * Fetch user details and update the Redux store
   */
  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include',
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  }, [dispatch]);

  /**
   * Fetch the count of products added to the cart
   */
  const fetchUserAddToCart = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: 'include',
      });

      const dataApi = await response.json();

      setCartProductCount(dataApi?.data?.count || 0);
    } catch (error) {
      console.error("Failed to fetch cart product count:", error);
    }
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
  }, [fetchUserDetails, fetchUserAddToCart]);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // User detail fetch
          cartProductCount, // Current user add-to-cart product count
          fetchUserAddToCart, // Function to fetch add-to-cart count
        }}
      >
        <ToastContainer position="top-center" />
        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
