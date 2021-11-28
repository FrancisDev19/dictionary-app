import Navbar from "./components/Navbar";
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar/>
      <div className="h-full flex justify-center items-center">
        <Card/>
      </div>
    </>
  );
}

export default App;
