import { Button, FloatingLabel, Form } from "react-bootstrap";
import "./BtnVerProducto.css"



const BtnVerProducto = ({title, ingredientes, imagen, precio}) => {
    return (
        <>
            <div className="bg-success">
                <img className='img-fluid' src={imagen} />
            </div>
            <div id="titulo-precio">
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <h2>{precio}</h2>
                </div>
            </div>

            <div>
                <h4>{ingredientes}</h4>
            </div>

            <div id="cantidad-producto">
                <div>
                    <h5>Cantidad</h5>
                </div>
                <div>
                    <h5>Botones</h5>
                </div>
            </div>

            <div>
                <FloatingLabel controlId="floatingTextarea2" label="Notas">
                    <Form.Control
                        as="textarea"
                        placeholder="Deja tus notas aquí"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <br />
            <div className="container text-center">
            <Button>Agregar</Button>
            </div>
        </>
    );
}

export default BtnVerProducto;