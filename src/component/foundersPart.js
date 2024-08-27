import FOUNDERBOX from "../component/founderBox"
import profile from "../images/profile-1.jpg"
import profile2 from "../images/profile-2.jpg"
import profile3 from "../images/profile-3.jpg"
import "../style/foundersPart.sass";
export default function () {
    return(
        <div className="founder continer">
             <FOUNDERBOX pONE=" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. " img={profile} h="Satish Patel" pTow=" Founder & CEO"/>
             <FOUNDERBOX pONE=" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." img={profile2} h=" Bruce McKenzie " pTow=" Founder & CEO"/>
             <FOUNDERBOX pONE=" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." img={profile3} h=" Iva Boyd" pTow=" Founder & CEO"/>
        </div>
    )
   
}