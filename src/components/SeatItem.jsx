const SeatItem = ({seatData, reload}) => {

const reserved = seatData.reserved ? " reserved" : ""

const reservate = () => {

  fetch("http://localhost:6969/api/saalplan", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...seatData, reserved: true}),
  })
  .then(() => reload(prev => !prev))

}

  return ( 
    <div className={seatData.type === "loge" ? "seat loge" + reserved : "seat parkett" + reserved} onClick={reservate}>
      {seatData.id}
    </div>
  );
}

export default SeatItem;