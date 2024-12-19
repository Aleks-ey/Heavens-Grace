import { useState, useEffect } from "react";
import { supabase } from "../../../../supabaseClient";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };

    checkAuth();
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        window.location.href = "/admin"; // Redirect to the admin page
      }
    } catch (err) {
      setError("Something went wrong.", err.message);
    }
  };

  return (
    <div className="w-full h-screen py-32 flex flex-col justify-center items-center bg-base-dark">
      <div className="w-1/3 h-1/2">
        <div className="bg-accent">
          <h1 className="text-3xl font-bold text-white p-2">Login</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="w-full px-2 py-4 bg-base-light "
        >
          {error && <p className="error-message">{error}</p>}
          <div>
            <label className="font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-1 border border-gray-500 rounded-lg"
            />
          </div>
          <div>
            <label className="font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-1 border border-gray-500 rounded-lg"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="self-center px-4 py-2 mt-4 bg-main hover:bg-white text-white hover:text-main border border-main rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
