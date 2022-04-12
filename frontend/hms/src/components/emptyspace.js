import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row'

class Emptyspace extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Row className="emptyspace">
            </Row>
            </>
        )
    }
}

export default Emptyspace;