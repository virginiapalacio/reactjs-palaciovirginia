import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1><b>Error</b></h1>
                    <h2><b>404</b></h2>
                    <p>La página que estás buscando no existe!</p>
                    <p className="my-5"><Link to={"/"} className="btn bg-black text-white">  Volver a la página principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;