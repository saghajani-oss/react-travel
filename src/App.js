
import './App.css';
import Header from './Header';
import Card from './Card';
import cardData from './cardData';

function App() {
  const cardEl = cardData.map((item) => {
    return(
      < Card item={item}/>
    )
  })
  return (
    <div className="App">
      <Header />
      {cardEl}
    </div>
  );
}

export default App;
