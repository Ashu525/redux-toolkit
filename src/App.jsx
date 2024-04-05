import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div
      style={{
        padding: "1em",
        backdropFilter: "blur(10px)",
        border: "1px solid white",
        borderRadius: "10px",
        boxShadow: "0 0 50px white",
      }}
    >
      <Navbar />
      <UserDetails />
    </div>
  );
};

export default App;
