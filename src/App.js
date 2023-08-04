import Alert from "./section/Alert";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import { MyComponent } from "./section/MyComponent";
import Ribbon from "./section/Ribbon";
import Schedule from "./section/Schedule";
import Speaker from "./section/Speaker";

function App() {
  return (
    <div>
      <Alert />
      <MyComponent />
      <Ribbon />
      <Speaker />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;