
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../../../public/assets/qZone1.png'
import classs from '../../../../public/assets/qZone2.png'
import play from '../../../../public/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y- mb-3">
                <h3 className="text-2xl mb-2">Login</h3>
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle />
                    Google</button> <br />
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Git hub</button>
            </div>
            <div className="p-4 space-y- mb-3">
                <h3 className="text-2xl mb-2">Find Us On</h3>
                <a className="p-4 flex mr-3 text-xl items-center border-rounded-t-lg" href=""><FaFacebookF /><span className="ml-2">Facebook</span></a>
                <a className="p-4 flex mr-3 text-xl items-center border-rounded-t-lg" href=""><FaTwitter /><span className="ml-2">Twitter</span></a>
                <a className="p-4 flex mr-3 text-xl items-center border-rounded-t-lg" href=""><FaInstagram /><span
                    className="ml-2">Instragram</span></a>
            </div>
            <div>
                <img src={swimming} alt="" />
                <img src={classs} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;