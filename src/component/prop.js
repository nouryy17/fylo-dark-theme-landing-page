export default function ({src,heder,p}) {
    return(
        <div className="box">
            <img src={src}></img>
            <h4>{heder}</h4>
            <p>{p}</p>
        </div>
    )
}