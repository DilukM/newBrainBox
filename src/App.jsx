import RoutesIndex from "./routes/Routes_index.jsx";
import Loading from "./pages/PageLoading/loading";
import useAuthContexts from "./context/AuthContext";

function App() {
  const { loading } = useAuthContexts();

  return loading ? <Loading /> : <RoutesIndex />;
}

export default App;
