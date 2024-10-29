import { Link } from "react-router-dom";
import { NOTFOUNDIMAGE } from "../../utils/assets/images/images";

const NotFound = () => {
    return (
        <div className="h-dvh w-full grid place-items-center">
            <div className="flex flex-col justify-center items-center">

                <img src={NOTFOUNDIMAGE} alt="notfound" />
                <div className="p-2">
                    <Link to={"/"}>
                        <button className="bg-primary  text-white py-2 px-4 rounded-lg"> Back to home</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default NotFound;
