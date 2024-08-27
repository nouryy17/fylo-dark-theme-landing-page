import img from "../images/illustration-stay-productive.png"
import "../style/testimonial.sass"
export default function () {
    return(
        <div className="continer testimonial">
            <img src={img}></img>
            <div>
                <h1> Stay productive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
                <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a> See how Fylo works Fylo </a>
            </div>
        </div>
    )
}