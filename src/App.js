import './App.css';
import ChartContainer from './containers/ChartContainer';

function App() {

  const handleBackgroundChange = () => {
    document.body.style.backgroundImage = "url('/public/the_beast_of_savile.jpeg')";
  }

  return (
    <>
    <div className="App">
      <img src={`${process.env.PUBLIC_URL}/totp_logo.jpeg`} width="250" alt="Yer Maw"/>
      <ChartContainer/>
    </div>
    <footer>
      <button onClick={handleBackgroundChange}>EMERGENCY</button>
    </footer>
    </>
  );
}

export default App;
