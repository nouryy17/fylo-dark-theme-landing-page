 
export default function ({h,pOne,pTow,img}) {
    return(
        <div>
            <p>  {pOne} </p>
            <div>
              <img src={img}></img>
            <div> 
                <h6> {h} </h6>
                <p> {pTow} </p>
            </div>
            </div>
        </div>
    )
}