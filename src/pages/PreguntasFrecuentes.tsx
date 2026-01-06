import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreguntasFrecuentes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Tratamientos page where FAQ is now integrated
    navigate('/tratamientos', { replace: true });
  }, [navigate]);

  return null;
};

export default PreguntasFrecuentes;
