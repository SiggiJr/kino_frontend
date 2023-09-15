import { useEffect, useState } from "react";
import SeatItem from "../components/SeatItem";
import { Link } from "react-router-dom";

const Saalplan = ({seats, setSeats}) => {

  // const [seats, setSeats] = useState([])
  const [refresh, setRefresh] = useState(false)
// const [clicked, setClicked] = useState(false)


  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER)
    .then(response => response.json())
    .then(data => {
      setSeats(data)
    })
  }, [refresh])

  return ( 
    <section>
    <h1>Kino 1</h1>
    <div className="seat_grid">
      {seats.map(seat => <SeatItem key={seat.id} seatData={seat} reload={setRefresh} />)}
    </div>
    <p>
    Hier gehts zum supergeheimen Adminbereich: 
    </p>
    <Link to={"/dashboard"}>Link zum supergeheimen Adminbereich</Link>
    </section>
  );
}

export default Saalplan;