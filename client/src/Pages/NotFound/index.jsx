// Link
import { Link } from "react-router-dom";
// Referencia da imagem
import RobotImg from "../../assets/robot-404.jpg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <img src={RobotImg} alt="404" className="w-80" />
      <h1 className="text-center text-3xl font-bold">
        Página não encontrada!{" "}
        <Link to="/" className="underline">
          Clique aqui para voltar
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
