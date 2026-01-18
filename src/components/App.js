import { useState } from "react";
import "../styles/App.css"

const photos = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
];

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <button onClick={() => setIndex((prev) => prev === 0 ? photos.length - 1 : prev - 1)}>◀</button>
      <img src={photos[index]} alt="carousel" />
      <button onClick={() => setIndex((prev) => prev === photos.length - 1 ? 0 : prev + 1)}>▶</button>
    </div>
  );
};

export default App;
