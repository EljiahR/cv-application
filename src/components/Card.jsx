/* eslint-disable react/prop-types */
import "../styles/card.css"

export default function Card({ children }){
    return (
        <div className="card">{children}</div>
    )
}