import QueryProvider from "services/query-provider";

import Todo from "./todo";

function App() {
  return (
    <QueryProvider>
      <Todo />
    </QueryProvider>
  );
}

export default App;
