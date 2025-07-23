// Imports
import xlsx from "xlsx";
import { Readable } from "stream";

// Função principal do controller
const limparController = async (req, res) => {
  // Pega os arquivos enviados no POST
  const campanhaFile = req.files["campanha"]?.[0];
  const bilheteFile = req.files["bilhete"]?.[0];

  // Valida se os arquivos foram enviados
  if (!campanhaFile || !bilheteFile) {
    return res
      .status(400)
      .send("Os arquivos campanha e bilhete devem ser enviados!");
  }

  // Ler os arquivos com xlsx
  const campanhaWorkbook = xlsx.read(campanhaFile.buffer, { type: "buffer" });
  const bilheteWorkbook = xlsx.read(bilheteFile.buffer, { type: "buffer" });

  // Transforma os XLSX enviados em formato JSON
  const campanhaData = xlsx.utils.sheet_to_json(
    campanhaWorkbook.Sheets[campanhaWorkbook.SheetNames[0]]
  );
  const bilheteData = xlsx.utils.sheet_to_json(
    bilheteWorkbook.Sheets[bilheteWorkbook.SheetNames[0]]
  );

  // Fazer a lógica da limpeza da campanha (PROCV)
  
};

// Exportação
export default limparController;
