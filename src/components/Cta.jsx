import Button from "./Button";
import { motion } from "framer-motion";

function Cta() {
  return (
    <motion.section
      id="contact"
      className="cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <form>
          <span>35,000+ already joined</span>
          <h2 className="sub-heading">Stay up-to-date with what we’re doing</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your email address"
              required
            />
            <Button>Contact Us</Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default Cta;
