import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    
  }, []) */

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
