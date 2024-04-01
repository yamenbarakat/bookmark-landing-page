import { useState } from "react";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import faqData from "../helpers/faqData";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Button from "./Button";

function Faq() {
  const data = faqData();
  const [openItem, setOpenItem] = useState("");

  return (
    <motion.div
      className="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <SectionText type="h2" title="Frequently Asked Questions">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </SectionText>

        <dl>
          {data.map((item) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
              openItem={openItem}
              onOpenItem={setOpenItem}
            />
          ))}
        </dl>

        <Button>More Info</Button>
      </div>
    </motion.div>
  );
}

export default Faq;

function Accordion({ question, answer, openItem, onOpenItem }) {
  const isOpen = openItem === question;

  return (
    <div>
      <dt onClick={() => onOpenItem(isOpen ? "" : question)}>
        {question}
        {isOpen ? (
          <CaretUp size={32} weight="bold" className={isOpen ? "opened" : ""} />
        ) : (
          <CaretDown size={32} weight="bold" />
        )}
      </dt>
      <motion.dd
        layout
        style={{
          height: isOpen ? "fit-content" : "0",
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "1.5rem" : 0,
        }}
      >
        {answer}
      </motion.dd>
    </div>
  );
}
