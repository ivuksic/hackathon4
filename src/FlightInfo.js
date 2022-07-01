import { DateTime } from 'luxon';



const FlightInfo = (props) => {

    const data = props.data
    let duration = DateTime.fromMillis(data.duration.total * 1000).toFormat("hh'h'mm'min'")
    const aTime = DateTime.fromMillis(data.aTime * 1000).toFormat('HH:mm')
    const dTime = DateTime.fromMillis(data.dTime * 1000).toFormat('HH:mm')
    return (
        <div className="flightinfo">
            <div className="basicinfo">
            <div className="direct">
                {data.has_airport_change ?
                <>
                <span class="material-symbols-outlined">transfer_within_a_station</span>
                <p>transfer</p>
                </>
                :
                <>
                <span class="material-symbols-outlined">double_arrow</span>
                <p>direct</p>
                </>
                }
            </div>
            <div className="departure">
                <p className="time">{dTime}</p>
                <p>{data.cityFrom}</p>
            </div>
            <div className="duration">
                <p className="duration-text">duration</p>
                <span class="material-symbols-outlined">
                trending_flat
                </span>
                <p>{duration}</p>
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
    )

}
export default FlightInfo;

