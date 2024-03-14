import { useNavigate } from "react-router-dom";
 
const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/public/");
  }, 5000);
  return (
    <>
      <h2>Page d'erreur 404</h2>
      <p>Vous allez être redirigé dans 5 secondes sur la page d'accueil</p>
    </>
  );
};
 
export default ErrorPage;