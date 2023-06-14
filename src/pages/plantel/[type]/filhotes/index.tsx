import Card from "../../../../components/Card";
import Title from "../../../../components/Title";

import { smallFathersPugs } from "../../../../services/api.paisPequenos";

export default function Filhotes() {
  return (
    <>
      <div>
        <Title
          title="Padreadores e Matrizes"
          description="Nossos cães da raça Rottweiler são descendentes de cães nascidos na
          Alemanha ou dos melhores canis do Brasil!"
        />
      </div>

      <Card
        ListItem={smallFathersPugs}
        filhotes={false}
        Plantel={true}
        type={"pequeno"}
        more={false}
      />
    </>
  );
}
