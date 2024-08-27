import PROP from "./prop"
import accessAnywhere from "../images/icon-access-anywhere.svg"
import security from "../images/icon-security.svg"
import collaboration from "../images/icon-collaboration.svg"
import anyFill from "../images/icon-any-file.svg"
import  "../style/props.sass"
export default function () {
 return(
    <div className="props continer">
        <PROP src={accessAnywhere} heder="Access your files, anywhere" p=" The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. "></PROP>
        <PROP src={security} heder="Security you can trust" p="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."></PROP>
        <PROP src={collaboration} heder="Real-time collaboration" p="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."></PROP>
        <PROP src={anyFill} heder=" Store any type of file " p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. "></PROP>
    </div>
 )   
}