import './App.css';
import ChartContainer from './containers/ChartContainer';

function App() {
  return (
    <div class="App">
      <img src={`${process.env.PUBLIC_URL}/totp_logo.jpeg`} width="250" alt="Yer Maw"/>
      <ChartContainer/>
    </div>
  );
}

export default App;
