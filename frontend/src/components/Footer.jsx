import React from "react";

function Footer() {
    return (
        <div className="w-3/4 bg-slate-200 relative left-[338px] mt-5">
            <div className="flex flex-wrap">
                <div className="p-5">
                    <img className="h-10" src="../img/logo.png" alt="" />
                    <h1>OPENING HOURS</h1>
                    <p>Monday - Sunday : 06.00 AM - 10.00 PM</p>
                </div>
                <div className="p-5">
                    <h1 className="text-xl font-bold">RECENT POST</h1>
                    <a href="">FOLLOW THIS LINK TO SEE POST</a>
                </div>
                <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">CONTACT INFO</h1>
                    <div className="flex items-center w-[360px] gap-1">
                        <img
                            className="h-8"
                            src="../img/HomeLoc.png"
                            alt="Location"
                        />
                        <p>
                            JALAN MEJASEM BARU 4 NO.45 KABUPATEN TEGAL,KECAMATAN
                            KRAMAT
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <img className="h-8" src="../img/browsser.png" alt="" />
                        <h1>JssN-Cafe.co.id</h1>
                    </div>

                    <div className="flex items-center gap-1">
                        <img className="h-8" src="../img/email.png" alt="" />
                        <h1>JssN_Cafe@gmail.com</h1>
                    </div>

                    <div className="flex items-center gap-1">
                        <img className="h-8" src="../img/telepon.png" alt="" />
                        <h1>0878-9503-1524</h1>
                    </div>
                </div>
            </div>
            <footer className="bg-[#434868] p-3 text-white font-bold ">&copy;COPYRIGHT JSSN-CAFE. WEBSITE BY : AZMIASYROF</footer>
        </div>
    );
}

export default Footer;
