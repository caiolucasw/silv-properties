import InfoBox from "./Infobox";

const InfoBoxes = () => {
  return (
    // <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Para Inquilinos"
            buttonInfo={{
              link: "/properties",
              label: "Procure Propriedades",
              color: "bg-black",
            }}
          >
            Encontre propriedades para Aluguel. Salve as propriedades e contate
            o proprietário
          </InfoBox>

          <InfoBox
            heading="Para Proprietários"
            buttonInfo={{
              link: "/properties/add",
              label: "Adicionar Propriedade",
              color: "bg-blue-500",
            }}
          >
            Compartilhe sua propriedade e encontre inquilinos interessados
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
