import React from "react";
import "./Pages.css";
import "./Hobbies.css";
import { MdPersonalVideo, MdPets } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { GiHammerNails } from "react-icons/gi";

export default function Hobbies() {

    return (
        <div className="containerr">

            <div className="section-container-header">
                <h1>My hobbies</h1>
                <br></br>
            </div>

            <div className="hobbies">

                <div className="hobby-wrapper">
                    <div className="hobby">
                        <MdPersonalVideo className="icon-hobby" />
                        <h4>Programming</h4>
                        <p>Lately I found out that I’m passionate about computing and creating things from scratch.</p>
                    </div>
                    <div className="hobby">
                        <IoIosFootball className="icon-hobby" />
                        <h4>Football</h4>
                        <p>Besides this, I like being active and I am mainly passionate about playing football with my friends.</p>
                    </div>


                </div>
                <div className="hobby-wrapper">
                    <div className="hobby">
                        <GiHammerNails className="icon-hobby" />
                        <h4>Wood-work</h4>
                        <p>Living in the countryside I enjoy woodworking easy crafts...</p>
                    </div>

                    <div className="hobby">
                        <MdPets className="icon-hobby" />
                        <h4>Pet lover</h4>
                        <p>...and long walks through the forest with my dogs.</p>
                    </div>


                </div>



            </div>







            {/* <div classNameName="section-wrap">
                <div classNameName="section">
                    <div classNameName="company-logo">
                        <img src="" alt="company-logo"></img>
                    </div>
                    <div classNameName="text">
                        <h3>Company name</h3>
                        <br></br>
                        <div classNameName="role-location">
                            <h5>Role</h5>
                            <p>Period | total (9 months)</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>short description asdASDSAD ASFAS FSADF SDFSDF SDF SDF DSFSDFASWEETERGE EGERG ERGEQERG  ERGQE  ERGQEG QERGQERG QERGQE RGQERGQ ERGQERG QERGR G E RGFGDLKlkslfkjslkgjlskfgjdf gdfgdfgd gdf gd fgd fgdgdfgdrg fgdge rge rgd dg  erge</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}