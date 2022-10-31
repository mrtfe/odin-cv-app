import { GeneralInformation } from "./components/GeneralInformation";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GeneralExample } from "./components/GeneralExample";
import "./App.css";

function App(props) {
  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="wrapper">
        <div>
          <GeneralInformation />
          <Education />
          <Experience />
        </div>
        <div>
          <GeneralExample />
        </div>
      </div>
    </>
  );
}

export default App;
