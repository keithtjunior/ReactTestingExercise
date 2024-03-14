import Coin from './Coin'

const images = [
  'https://coinsofamerica.com/wp-content/uploads/state-quarter-d-mint.jpg',
  'https://coinsofamerica.com/wp-content/uploads/massachusetts-state-quarter.jpg'
]

function App() {
  return (
    <Coin images={images} />
  );
}

export default App;
