 
export default function ({h,pONE,pTow,img}) {
    return(
        <div className="founderBox">
            <p>  {pONE} </p>
            <div className="info">
              <img src={img}></img>
            <div> 
                <h6> {h} </h6>
                <p> {pTow} </p>
            </div>
            </div>
        </div>
    )
}