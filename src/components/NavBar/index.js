import React from 'react';
import Atif_Shaikh_Resume from '../../documents/Atif_Shaikh_Resume.pdf';

function Navbar (){
    return (
        <div className="navCont pt-4 pb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center myNav">
                    <h1 className="navName">Atif Shaikh</h1>
                    <h3><a href="#projSecBod" className="navlink">Projects</a></h3>
                    <h3><a href="https://github.com/AtifAShaikh" className="navlink">Github</a></h3>
                    <h3><a href="https://www.linkedin.com/in/atif-shaikh-0b1565181/" className="navlink">LinkedIn</a></h3>
                    <h3><a href={Atif_Shaikh_Resume} target = "_blank" className="navlink">Resume</a></h3>
                    <h3><a href="#contact" className="navlink">Contact Me</a></h3>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;