import Title from "../../../components/Title";
import Card from "../../../components/Card";
import styles from "./filhotes.module.scss";

import { smallFathersPugs } from "../../../services/api.paisPequenos";

import { BigFathersRotts } from "../../../services/api.paisGrande";
export default function Filhotes() {
  return (
    <div className="container">
      <Title
        title="Padreadores e Matrizes"
        description="Nossos cães da raça Rottweiler são descendentes de cães nascidos na
          Alemanha ou dos melhores canis do Brasil!"
      />

      <div className={styles.wrapperList}>
        <Card
          ListItem={smallFathersPugs}
          filhotes={true}
          Plantel={true}
          type={"pequeno"}
        />
      </div>

      <Card
        ListItem={BigFathersRotts}
        filhotes={true}
        Plantel={true}
        type={"grande"}
      />
    </div>
  );
}
