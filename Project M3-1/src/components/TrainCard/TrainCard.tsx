import type {Train} from 

export default function TrainCard({ id, name, runsOn, departure, arrival, duration, classes }: Props) {
  return (
    <div>
        <p>{ id } - { name }</p>
        <p>Runs on</p>
        <span>{ runsOn }</span>

        <div>
            <div>
                <p>{ departure.date }</p>
                <p>{ departure.time }</p>
                <p>{ departure.station } - { departure.code }</p>
            </div>

            <p>{ duration }</p>

            <div>
                <p>{ arrival.date }</p>
                <p>{ arrival.time }</p>
                <p>{ arrival.station } - { arrival.code }</p>
            </div>
        </div>
        <ClassTypeContainer class="{class}" />
    </div>
  )
}