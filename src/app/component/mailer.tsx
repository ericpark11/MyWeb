import emailjs from "emailjs-com"
import { FormEvent } from "react";

export default function Mailer() {
    async function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const res = await emailjs.sendForm(
                "service_z3e4rfo",
                "template_ubekbek",
                e.target as HTMLFormElement,
                "mHL6TqKUV52k_TrL5"
            )

            console.log(res);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
            <form id="mailer"
                onSubmit={sendEmail}>
                <h3 className="contactHeader">Contact Form</h3>
                <div className="inputGroup">
                    <input type="text" name="name" className="form-control" id="name" required/>
                    <label htmlFor="name" ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg> <div id="name">Name</div></label>
                </div>
                <div className="inputGroup">
                    <input type="email" name="user_email" className="form-control" id="email" required/>
                    <label htmlFor="email"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><div id="email"> Email</div></label>
                </div>
                <div className="inputGroup">
                    <textarea name="message" rows={10} className="form-control" id="message" required/>
                    <label htmlFor="message"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg><div id="message">Message</div></label>
                </div>
                <button
                        id="button"
                        type="submit"
                        value="SEND"
                        className="form-control btn btn-primary">SEND
                </button>
            </form>
    );
}