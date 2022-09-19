import { NavBar, Footer } from "./landing/components";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
