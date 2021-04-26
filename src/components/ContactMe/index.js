import React from 'react';

function ContactMe() {
    return(
        <div>
            <div className="container pt-4 pb-3">
                <h1 className="contactTitle" id="contact">Contact Me</h1>
                <ul className="contactList">
                    <li><h4>Phone: 310-755-5217</h4></li>
                    <li><a className="projLink" href="mailto: atifsha05@gmail.com"><h4>Email: atifsha05@gmail.com</h4></a></li>
                    <li><a className="projLink" href="https://www.linkedin.com/in/atif-shaikh-0b1565181/"><h4>Linkedin</h4></a></li>
                    <li><a className="projLink" href="https://github.com/AtifAShaikh"><h4>Github: AtifAShaikh</h4></a></li>
                </ul>
            </div>
            <div className="foot mt-3">
            </div>
        </div>
    );
}

export default ContactMe;