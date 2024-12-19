import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { supabase } from "../../../supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check the current session
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    // Unsubscribe on cleanup
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check the current session
//     const checkAuth = async () => {
//       const { data } = await supabase.auth.getSession();
//       setIsAuthenticated(!!data.session);
//       setLoading(false);
//     };

//     checkAuth();

//     // Listen for auth state changes
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_, session) => {
//         setIsAuthenticated(!!session);
//         setLoading(false);
//       }
//     );

//     return () => {
//       authListener?.unsubscribe();
//     };
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading state while checking auth
//   }

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ProtectedRoute;
