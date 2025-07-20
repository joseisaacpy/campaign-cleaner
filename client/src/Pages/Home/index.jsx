const Home = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col">
          <label htmlFor="campanha">Insira o XLSX da campanha</label>
          <input
            className="border p-2 rounded"
            type="file"
            name="campanha"
            id="campanha"
            placeholder="XLSX da campanha"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bilhete">Insira o XLSX do bilhete da campanha</label>
          <input
            className="border p-2 rounded"
            type="file"
            name="bilhete"
            id="bilhete"
            placeholder="XLSX do bilhete da campanha"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
