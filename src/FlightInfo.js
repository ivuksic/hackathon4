const FlightInfo = (props) => {
  const data = props.data;

  console.log(data.price);
  console.log(data.cityTo);
  return <h1>FLightInfo</h1>;
};
export default FlightInfo;
