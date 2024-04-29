import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center h-screen my-auto flex flex-col justify-center space-y-5
        ">
            <h2 className="text-6xl font-bold">404</h2>
            <p className="text-4xl font-bold">Page Not Found?</p>
            <p className="font-semibold text-gray-500">Whoops, this is embracing.</p>
            <p className="font-semibold text-gray-500">Looks like the page you were looking for wasn't found.</p>
            <Link>
                <button className=" bg-red-300 text-white text-base md:text-lg font-semibold px-6 py-2 rounded-md cursor-pointer  border-none">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;