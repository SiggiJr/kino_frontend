import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Dashboard = ({seats, setSeats}) => {

  // const [seats, setSeats] = useState([])
  const reservedSeats = seats.filter(seat => seat.reserved)
  let umsatz = 0;

  reservedSeats.forEach(seat => umsatz = umsatz + seat.price)


  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER)
    .then(response => response.json())
    .then(data => setSeats(data))
  }, [])

  // useEffect(() => {
  //   reservedSeats.forEach(seat => umsatz = umsatz + seat.price)

  // }, [seats])

  const reset = () => {
    const resetSeats = seats.map(seat => {
      seat.reserved = false
    return seat})
    fetch(import.meta.env.VITE_SERVER, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(resetSeats)
    })
    .then(() => setSeats(resetSeats))
  }

  return ( 
    <section>
      <header>
        <h1>Wilkommen Kinobesitzer</h1>
      </header>
      <div>
        <h3>Freie Plätze</h3>
        <h2>{seats.length - reservedSeats.length}</h2>
      </div>
      <div>
        <h3>Umsatz</h3>
        <h2>{umsatz}€</h2>
      </div>
      <div className="reset_btn" onClick={reset}>
        <h1>Reset</h1>
      </div>
      <Link to={"/"}>Zurück zum Saalplan</Link>
    </section>
  );
}

export default Dashboard;