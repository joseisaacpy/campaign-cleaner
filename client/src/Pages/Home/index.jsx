// useState
import { useState } from "react";
// Toast
import { ToastContainer, toast } from "react-toastify";
// Icons
import { SiCcleaner } from "react-icons/si";

const Home = () => {
  // State do input da campanha
  const [campanha, setCampanha] = useState(null);
  // State do input de bilhete
  const [bilhete, setBilhete] = useState(null);
  // State do loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Valida se os inputs foram preenchidos
    if (!campanha || !bilhete) {
      toast.error("Preencha todos os campos");
      return;
    }
    const formData = new FormData();
    formData.append("campanha", campanha);
    formData.append("bilhete", bilhete);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/limpar", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro no servidor");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "campanha-limpa.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Erro ao limpar campanha:", error);
      toast.error("Erro ao processar os arquivos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <h1 className="flex items-center justify-center text-4xl uppercase text-center font-bold text-green-600 mb-5">
        Campaign <SiCcleaner className="animate-pulse" />
        leaner
      </h1>
      <section className="w-[95%] max-w-[600px] flex flex-col gap-3 border-2 rounded-[10px] p-2">
        <div className="flex flex-col gap-2 border-2 p-2 rounded-[10px] shadow-2xs">
          <label className="font-bold text-left" htmlFor="campanha">
            Insira o XLSX da campanha:
          </label>
          <input
            className="border p-2 rounded"
            type="file"
            name="campanha"
            id="campanha"
            placeholder="XLSX da campanha"
            onChange={(e) => setCampanha(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col gap-2 border-2 p-2 rounded-[10px] shadow-2xs">
          <label className="font-bold text-left" htmlFor="bilhete">
            Insira o XLSX do bilhete da campanha:
          </label>
          <input
            className="border p-2 rounded"
            type="file"
            name="bilhete"
            id="bilhete"
            placeholder="XLSX do bilhete da campanha"
            onChange={(e) => setBilhete(e.target.files[0])}
          />
        </div>
        <button
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-all duration-200 cursor-pointer"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Processando..." : "Limpar Campanha"}{" "}
        </button>
      </section>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Home;
