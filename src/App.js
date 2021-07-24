import { Container } from "./components/Container";
import { TodoProvider } from "./context/TodoProvider";



function App() {
  return (
     <TodoProvider>
        <Container/>
     </TodoProvider>
  );
}

export default App;
