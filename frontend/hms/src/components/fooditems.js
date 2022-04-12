import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Fooditems extends React.Component{

    constructor(props){
        super(props)
    }

    popup(props){
        alert("This is description for matar paneer")
    }

    render(){
        return(
            <>
            <Row className='fooditemrow'>
                <Col>Veg</Col>
                <Col>Matar Paneer Masala
                <FontAwesomeIcon icon={faInfoCircle} onClick={this.popup} /> <t></t>
                </Col>
                <Col>INR 45.00</Col>
                <Col>
            
                <a href="#">+</a>                
                </Col>
            </Row>
            </>
        )
    }
}

export default Fooditems