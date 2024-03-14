
import { useNavigate } from "react-router-dom";
 
const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <>
      <h2>Page d'erreur 404</h2>
      <p>Vous allez être redirigé dans 5 secondes à la page d'acceuil</p>
    </>
  );
};
 
export default ErrorPage;