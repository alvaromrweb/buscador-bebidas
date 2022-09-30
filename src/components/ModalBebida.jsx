import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const {modal, toggleModal, bebida} = useBebidas()
    const handleModalClick = () => {
        toggleModal()
    }
    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i = 1; i <= 15; i++) {
            if(bebida[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{bebida[`strIngredient${i}`]} {bebida[`strMeasure${i}`]}</li>
                )
            }
            
        }
        return ingredientes
    }
  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Image src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`} />
        <Modal.Header>
            <Modal.Title>{bebida.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {bebida.strInstructions}
                <h2>Ingredientes y cantidad</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida