import "./App.css";
import SignupForm from "./components/SignupForm";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <SignupForm />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
