import { DateTime } from "luxon";

const FlightInfo = (props) => {
  const data = props.data;
  const duration = DateTime.fromMillis(data.duration.total * 1000).toFormat(
    "hh:mm"
  );
  const aTime = DateTime.fromMillis(data.aTime * 1000).toFormat("hh:mm");
  const dTime = DateTime.fromMillis(data.dTime * 1000).toFormat("hh:mm");
  console.log(data.price);
  console.log(data.cityTo);
  console.log(DateTime.fromMillis(data.aTime * 1000).toFormat("hh:mm"));
  return (
    <div className="flightinfo">
      <div className="direct">{data.has_airport_change}</div>
      <div className="departure">
        {dTime}
        {data.cityFrom}
      </div>
      <div className="duration">{duration}</div>
      <div className="arrival">
        {aTime}
        {data.cityTo}
      </div>
      <div className="price">{data.price}</div>
    </div>
  );
};
export default FlightInfo;
