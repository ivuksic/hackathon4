import { DateTime } from "luxon";

const FlightInfo = (props) => {
  const data = props.data;
  const duration = DateTime.fromMillis(data.duration.total * 1000).toFormat(
    "HH'h'mm'min'"
  );
  const aTime = DateTime.fromMillis(data.aTime * 1000).toFormat("HH:mm");
  const dTime = DateTime.fromMillis(data.dTime * 1000).toFormat("HH:mm");
  let transair = ""
  if (data.route.length > 1) {
    for (let i = 1; i < data.route.length; i++) {
      transair += (data.route[i].flyFrom) + ", "
    }
    transair = transair.slice(0, -2);
  }

  return (
    <div className="flightinfo">
      <div className="basicinfo">
        <div className="direct">
          {(data.route.length > 1) ? (
            <>
              <span className="material-symbols-outlined">
                transfer_within_a_station
              </span>
              {(data.route.length -1 == 1) ?
              <p>{data.route.length -1 } transfer</p>
              :
              <p>{data.route.length -1 } transfers</p>
            }
              
              <p className="transferairports">({transair})</p>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">double_arrow</span>
              <p>direct</p>
            </>
          )}
        </div>
        <div className="departure">
          <p className="time">{dTime}</p>
          <p>{data.cityFrom}</p>
        </div>
        <div className="duration">
          <p className="duration-text">duration</p>
          <span className="material-symbols-outlined">trending_flat</span>
          <p className="durTime">{duration}</p>
        </div>
        <div className="arrival">
          <p className="time">{aTime}</p>
          <p>{data.cityTo}</p>
        </div>
      </div>
      <div className="price">
        <p>€{data.price}</p>
      </div>
    </div>
  );
};
export default FlightInfo;
