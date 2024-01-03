export default function Resume({ generalInfo }){
    return(
        <div id="result">
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone Number: {generalInfo.phone}</p>
        </div>
    )
}