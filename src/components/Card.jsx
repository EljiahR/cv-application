/* eslint-disable react/prop-types */
import "../styles/card.css"

export default function Card({ children, onClick }){
    return (
        <div onClick={onClick} className="card">{children}</div>
    )
}