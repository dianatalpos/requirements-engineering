import { NavItem } from "react-bootstrap"
import { Button, Card, } from 'react-bootstrap'



const InternshipItem = (props) => {
    const { internship, onPress } =  props

    return (

    <Card onClick={ onPress }>
        <Card.Body>
            <Card.Title>{internship.domain}</Card.Title>
            <Card.Subtitle>{internship.creator}</Card.Subtitle>
            <Card.Text>{internship.description}</Card.Text>
        </Card.Body>
    </Card>
    )
}

export default InternshipItem;