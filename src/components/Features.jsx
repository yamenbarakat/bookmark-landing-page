import { useState } from "react";
import SectionText from "./SectionText";
import { motion, AnimatePresence } from "framer-motion";
import tabsData from "../helpers/tabsData";

const tabsContent = tabsData();

function Features() {
  return (
    <motion.section
      id="features"
      className="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container">
        <header className="sub-header">
          <SectionText type="h2" title="Features">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </SectionText>
        </header>

        <Carousel />
      </div>
    </motion.section>
  );
}

export default Features;

function Carousel() {
  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="carousel" role="region" aria-label="Carousel">
      <ul role="tablist">
        {tabs.map((item, i) => (
          <li
            key={item}
            role="tab"
            aria-selected={selectedTab === i}
            className={selectedTab === i ? "selected" : ""}
          >
            <button onClick={() => setSelectedTab(i)}>{item}</button>
          </li>
        ))}
      </ul>

      <section>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="tabpanel"
            className="tabs-content"
          >
            <div className="image-tab">
              <img
                src={tabsContent[selectedTab].image}
                alt="illustration feautre"
              />
            </div>

            <SectionText
              type="h3"
              title={tabsContent[selectedTab].title}
              btn="More Info"
            >
              {tabsContent[selectedTab].text}
            </SectionText>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
