import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == parseInt (id));
                resolve(producto);
            }, 2000)
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                <ItemDetail item={item} />
                
                </div>
            </div>
    )
}

export default ItemDetailContainer;
