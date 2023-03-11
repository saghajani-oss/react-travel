
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card
        img="japan.avif"
        location="JAPAN"
        title="Mount Fuji Lake"
        date="12Jan, 2021 - 24 Jan, 2021"
        description="The Fuji Five Lake (富士五湖, Fujigoko) region lies at the northern
            base of Mount Fuji about 1000 meters above sea level around the
            lakes Kawaguchiko, Saiko, Yamanakako, Shojiko and Motosuko. It is
            one of the best places to view Mount Fuji from a close distance and
            a good base for climbing the mountain."
      />
    </div>
  );
}

export default App;
