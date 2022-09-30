import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import { useState } from 'react'

const Formulario = () => {
    const {categorias} = useCategorias()
    const {getBebidas} = useBebidas()
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setAlerta('')
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        getBebidas(busqueda)
    }
  return (
    <Form onSubmit={handleSubmit}>
        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre bebida</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Ej: Tequilla, Vodka, etc.' 
                        name="nombre" 
                        value={busqueda.nombre} 
                        onChange={e => setBusqueda({
                            ...busqueda, 
                            [e.target.name]: e.target.value
                        })} 
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Categoría bebida</Form.Label>
                    <Form.Select 
                        name="categoria" 
                        value={busqueda.categoria} 
                        onChange={e => setBusqueda({
                            ...busqueda, 
                            [e.target.name]: e.target.value
                        })} 
                        >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end'>
            <Col md={3}>
                <Button type="submit" variant='danger' className='text-uppercase w-100'>Buscar bebidas</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario