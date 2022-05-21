import useToast from "./hooks/useToast";

const App = () => {
  const toast = useToast();

  return (
    <div className="App">
      <h2>React Toast component example</h2>

      <h4>Try it!</h4>

      <div>
        <button onClick={() => toast.success("Success Toast!")}>Success</button>
        <button onClick={() => toast.error("Error Toast!")}>Error</button>
      </div>
    </div>
  );
};

export default App;
