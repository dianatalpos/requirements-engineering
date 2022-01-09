import { NavItem } from "react-bootstrap"
import { Button, Card, } from 'react-bootstrap'



const InternshipItem = (props) => {
    const { internship, onPress } =  props

    return (

    <Card onClick={ onPress }>
        <Card.Body>
            <Card.Title>{internship.description}</Card.Title>
            <Card.Subtitle>{internship.domain}</Card.Subtitle>
        </Card.Body>
    </Card>
    )
}

export default InternshipItem;