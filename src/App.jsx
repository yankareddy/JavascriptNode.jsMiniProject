import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

var React = require("react");
var ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
