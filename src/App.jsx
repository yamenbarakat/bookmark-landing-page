import Cta from "./components/Cta";
import Extentions from "./components/Extentions";
import Faq from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header />

      <Main>
        <Landing />
        <Features />
        <Extentions />
        <Faq />
        <Cta />
        <Footer />
      </Main>
    </>
  );
}
