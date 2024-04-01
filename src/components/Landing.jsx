import Button from "./Button";
import SectionText from "./SectionText";
import { motion } from "framer-motion";

function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <motion.div
          className="landing-img"
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src="illustration-hero.svg" alt="illustration hero" />
        </motion.div>

        <motion.section
          className="info"
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionText type="h1" title="A Simple Bookmark Manager">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </SectionText>

          <div className="landing-buttons">
            <Button>Get it on Chrome</Button>
            <Button>Get it on Firefox</Button>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

export default Landing;
