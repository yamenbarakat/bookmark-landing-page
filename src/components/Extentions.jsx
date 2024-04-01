import cardsData from "../helpers/cardsData";
import Button from "./Button";
import SectionText from "./SectionText";
import { motion } from "framer-motion";

function Extentions() {
  const cardData = cardsData();

  return (
    <motion.section
      id="extentions"
      className="extentions"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <SectionText type="h2" title="Download the extension">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </SectionText>

        <div className="cards">
          {cardData.map((card) => (
            <Card
              key={card.title}
              img={card.img}
              title={card.title}
              alt={card.alt}
              version={card.version}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Extentions;

function Card({ img, title, alt, version }) {
  return (
    <figure className="card">
      <img src={img} alt={alt} className="browser-icon" />
      <figcaption>
        <h3>{title}</h3>
        <p className="paragraph">{version}</p>
        <Button>Add & Install Extension</Button>
      </figcaption>
    </figure>
  );
}
