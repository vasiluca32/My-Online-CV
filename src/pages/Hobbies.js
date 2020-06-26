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

                <div>
                    <div className="hobby">
                        <MdPersonalVideo className="icon-hobby" />
                        <h4>Title</h4>
                        <p>textkdn;ksjnb;dfddgdgff fffffffffffffffffff ffffffffffdfgbbdfbfff fffffffffffffffffffffffksfjngb;fksjgbnk</p>
                    </div>

                    <div className="hobby">
                        <IoIosFootball className="icon-hobby" />
                        <h4>Title</h4>
                        <p>textkdn;ksjnb;ksfjngb;fksjgbnk;fjgnbk;fnjgbkfjg</p>
                    </div>
                </div>
                <div>
                    <div className="hobby">
                        <MdPets className="icon-hobby" />
                        <h4>Title</h4>
                        <p>textkdn;ksjnb;ksfjngb;fksjgbnk;fjgnbk;fnjgbkfjg</p>
                    </div>
                    <div className="hobby">
                        <GiHammerNails className="icon-hobby" />
                        <h4>Title</h4>
                        <p>textkdn;ksjnb;ksfjngb;fksjgbnk;fjgnbk;fnjgbkfjg</p>
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