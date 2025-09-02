import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);


    const images = [
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/541059464_1368480044638067_6097356057097017528_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RcvnqVIYMpAQ7kNvwH9X2YI&_nc_oc=Adl5ObZP_jS3CbObVEi3Jh29sDIS69PpTKz5fWTy7_cKLqdwbwrO66mIz7PFVrZbUOg&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=9Clvi233u75D99qN40-c5g&oh=00_AfXTDyMu_p3NINaVB7dCACkTFfRa0wPFHo54_RMCERUQHw&oe=68BC526D",
        "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/540927046_1367770608042344_2198585336933494952_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FVxdqXrSLT8Q7kNvwFOtTG8&_nc_oc=AdmWExuK_-n5iXR5HDF_gho0Xplle3zT5qtaJQ7NV_PkznZh6h1uVJuT5GqNxHe-UG4&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=UvOA_dRVq7zh0wL6w1vy4w&oh=00_AfXrndmb45vq2cCWw4rRv2dGgNnFpLKSO_2AkNVLltsqoA&oe=68BC583E",
        "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/541637341_1370153464470725_6970803488224781779_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PqBBVRmcROUQ7kNvwH0ZeTo&_nc_oc=AdmrpCMe9rPzZhSoPwygMsNoPua5rBin-xktXCBvLLnuhVghYFKNYIAKs5iutKTyXVE&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=WXhW3APZfaKYAV0mrp694Q&oh=00_AfX7Na5HllLiRlpRKHERoErwBD4F8jyc0VGZ-ayzrcrjvw&oe=68BC8811",
        "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/537229366_1363019048517500_3641729022168019489_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WWFUJIu-lcYQ7kNvwGlwHM1&_nc_oc=AdlfbsqBMFFQzPVWAcIWJl18q6nrnEsMFp5DGub_-IQvDQ9tnhMNzqzsrpUlda64f1U&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=2oHrqbBT3Agb3iRZml6aQw&oh=00_AfW5N4SfKXlcWwkFX3YEhTMjEU6a4Q8HthkSrIsOqoV4yA&oe=68BC5D09",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/537499995_1362872108532194_1907376866270529607_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l4PtjSgKrjsQ7kNvwENmYhi&_nc_oc=AdlN9igZan7YioBQM56Lbh56UIVJj-EHJo3gou9bFXpA0iThu7xUFvL3SBd-eOpVTKU&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=_tiqZ_yNriBax7yzdBhZkg&oh=00_AfXJsvSWa6RiyhU0VyxP9xahcX0044n8L2vaZ4O55wCt6Q&oe=68BC7B1F",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/536843823_1361471802005558_3501698661100100885_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cDjQv4An5y8Q7kNvwHMJaTw&_nc_oc=AdlKlTMRUttQgJWkBZrNr6jAXnttWzjfuVWoeS4lvkNIuFpFGqKuvJHz1aPWoOo79CQ&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=PLLLMlsqE4FZWSjGSOE7gQ&oh=00_AfVUeTLPzyCd2Gk3R9NOy-jO98bJwQiC_PUkSHOyrJA40A&oe=68BC670B",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/536646618_1361471702005568_7577125912634981011_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W7dok02oqKgQ7kNvwEXPWJG&_nc_oc=AdkPqhjcUsxXiu528ymDoIG7BNzSX4QoGr_mZ1TVBIyoNUW1CE3MQUfPP-HFO3__-E8&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=x6Dk6ZpnWSomRxsVWr0jow&oh=00_AfX8Y_C0UPLhSJ057kMSt5qMxMLAQIy4oyXQzLLhb1Xi6A&oe=68BC6F30",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/530751721_1353022939517111_4195882942998997612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=J4y3fSp1UfIQ7kNvwGYe7GT&_nc_oc=Adki6BIBnb7jYQxv9rJNbju3vgoSZTTQOgZwuo6PhhM0IIxTppfiucCqsci5F2odf8Q&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=PBKR8bYhLxx_bQ1pO-Fa6g&oh=00_AfUTJ8yV47N1SWF8nzhLWnm-3eE4aN5pbe3Jn7HIq2p3yw&oe=68BC57C1",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/530700566_1353020299517375_7703205963112628667_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zQlnmxcXOi8Q7kNvwHs0Y4q&_nc_oc=AdmDlDFvchvrJD-SzyazrJHTv7oqmruQ996LAaaOQDd13l7BSNcfADpVQmmf_q_O_H8&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=w1Bp2BXsoUhYGdtPny-RPw&oh=00_AfV0aOX8wH54A1av_glpuW6aM9v805AlHgacSKoKqURAoQ&oe=68BC69A0",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/531629116_1353021002850638_5954696336751832468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uui_wJDBbOQQ7kNvwGfeU_C&_nc_oc=AdlLjmENG-uDqKvlwzUDE0kgrZZkXVCSudRJ8-wWuNXw3RZBLhD13pOOjhBYsaluz24&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=VclDw-YMDLqV8Tr3NKeZMw&oh=00_AfU21FpmWuSGdrifaEPFhQ55VHJ8gqvuR4Yf5SCR61u3Xw&oe=68BC5552",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/523118074_1340469847439087_1858482861456573134_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ReY5GYnUhWwQ7kNvwHIifdO&_nc_oc=AdnGGmfvdNTKjj0TPg_H1cAUG_rM2gzAevzGniRqBxBOVlf2QROLFLM4_xR_Qh6ir7M&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=HDPNxM8Xze_tvqv5I_8RUw&oh=00_AfXtNaVfLOScJC4nRtAKF0Ir92kaRoj7stUKERuCr3qYSA&oe=68BC8818",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/529697242_1353021579517247_5477754011332914529_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4T8FEehxef8Q7kNvwFjTd7D&_nc_oc=Adk9UOeSajRkClkAeeNjGMDdloox_M0-0sR2M2kK8ONqLl3-MqQzXgk79o4lqCA-7JU&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=Qb-U-p4ER43vUBpa2MYt-g&oh=00_AfV7V72zYt6KFc-csHkVEmcp_nDL4wVsMcfXA7xsaQ28zQ&oe=68BC5D39",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/518316803_1334256871393718_6437133360064489181_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vBLUmgh7lC4Q7kNvwHNqIq_&_nc_oc=AdkONJ8SVTo5ohbP8BaHFfX8Xs6xocdWDSXUzLbZjSrAlCcQg4A4NbFo6-2hpbeiFSU&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=PlODLQyNsEGqSt8AmSCZWA&oh=00_AfUWzCMxrFWX4ZqxZHDTVCvGQPup6wD3Xf6fWaJXlL70kQ&oe=68BC8796",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/501057022_1296941591791913_2458941817051248512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tE6xJ25Cmu0Q7kNvwH3atTt&_nc_oc=Adk1LEkN46cMMxliOU9IN0g1sknQBgdIYEa0mAOVSC4K0UWD8ilrlTMB7De4YFJX9yg&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=cvnl-aeB_WkQHFzJH_cwaQ&oh=00_AfXyLrxZX-S8JJ8ErlLZmFrkN8qVgh7WExLDe4_--uCgzQ&oe=68BC7B72",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/500032929_1293629658789773_1693112528129987616_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TlpXOKP1rqYQ7kNvwHwPTS-&_nc_oc=AdkVxoAoH4_cx5q96WGzaqfNKpMD1aocV0lTHA7txhl6aS_W3dCApWBpqyodGglSub0&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=hEt3_p8L_HM7HRCZ-eE3VQ&oh=00_AfV1cHg8y3gFbdG1b6JaQyIlDDhtiUyZJc-tYTI8xyruhQ&oe=68BC710B",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/494727879_1277043320448407_2846182978245295187_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tzbteBNqbksQ7kNvwG2i60v&_nc_oc=AdlYYVx4M8Guwx6hiuOo4xYosvtBNyXxZDilHlBXE2-79MDgUmtM6XvFMPx2wZN5FeU&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=AMAxKxR4CTW7A_qw-J1BXQ&oh=00_AfUGZMGkefyH2ikpDaAv7ldJm8mA0i1a0t70yqldXlnfGg&oe=68BC7AFC",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/494435184_1276174197201986_602283068583533441_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C47N46iVdu8Q7kNvwF3205w&_nc_oc=Adn2vWaejz_CLQ9kSB7hLRtiNHq3yiG1NCxpsB70b5mpBjsdFGJBewpNKjlsNcYzHnI&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=eBct98rzfmSWlpEBnXT_Og&oh=00_AfXqLcPU730OCv3mwA3-VdyZo4Oz2dxQngDoT-34qXt5rQ&oe=68BC88CD",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/489511417_1259748998844506_1721034130266594386_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pT7iJ21HmjgQ7kNvwHelKO5&_nc_oc=AdkWeCSaz4WFTak1ZgYNSVQMUMWBZ9gYZ2Sgrwlu2YRJGNV34mqFDYZlJalCM-VYUW0&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=hwyurcBYxh-8NoW9uo0M8w&oh=00_AfWimuXsWeBnmxE8UlNpIFhzmVB7e8YOmhb65wkjm-ukLA&oe=68BC8907",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/486682753_1249139679905438_1978242694917971122_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nijzsfZlckAQ7kNvwFGfplc&_nc_oc=AdlluL47UjemLQ2cQZz0lYNCv9ul0JMS8A4HuCjkG80zqtMOXTlNu9SsZ73X05uoCKg&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=tf5aozzky4wnQZqfTv4zKQ&oh=00_AfXYeuDdvHTd6I_ZmsGOStIQ97dXih5RjCjch2qsRnDVvg&oe=68BC8DDE",
        "https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/481782419_1237015367784536_8327719136380922506_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nB8JF0w79voQ7kNvwENU_Lp&_nc_oc=AdnzGm-va56VVgx_BTcxRwKKd_78JKxdu71Np-mO2e7kA4K-xOHwZDjHCzLsPKx66b0&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=J-0dZn1u87vZhOcEL1HjuA&oh=00_AfVygY8oHFNUKIcHNDjmFI2uPfnM7qXLaWJTvqMzBrCDeQ&oe=68BC5741"
    ];

    return (
        <div>
            {/* Back Button */}
            <div className="back-btn-container">
                <button className="back-btn" onClick={() => window.history.back()}>
                    ← Back
                </button>
            </div>

            {/* Gallery Section */}
            <div className={`gallery-container ${selectedImage ? "blurred" : ""}`}>
                <h2 className="gallery-title">Photo Gallery</h2>
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                            onClick={() => setSelectedImage(src)}
                        >
                            <div className="gallery-card">
                                <img src={src} alt={`Gallery ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="modal" onClick={() => setSelectedImage(null)}>
                        <span className="close">&times;</span>
                        <img className="modal-content" src={selectedImage} alt="Enlarged" />
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    {/* Brand */}
                    <div className="footer-col">
                        <h2 className="footer-logo">Congress</h2>
                        <p className="footer-text">
                            Pre-independence: Students very prominently and positively participated in the National Movement.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-col">
                        <h3 className="footer-title">Resources</h3>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">Contact Us</h3>
                        <p>AICC Hq, Indira Bhawan, 9A Kotla Marg, New Delhi - 110002</p>
                        <p>Email : connect@inc.in, indirabhawan@inc.in</p>
                        <p>Tel : 011-65206520/21, 011-23019080 (24 Akbar Road)</p>

                        <div className="footer-socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© 2025 Congress. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Gallery;
