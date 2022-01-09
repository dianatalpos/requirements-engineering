import FlatList from 'flatlist-react';
import InternshipItem from "./InternshipItem"
import { Spinner } from 'react-bootstrap';


const InternshipList = (props) => {

    const { internships, onItemPressed, loading } = props

    console.log(internships);

    const renderListItem = (flatListProp) => {
        const { item } = flatListProp;

        return <InternshipItem internship={item} onPress= {() => onItemPressed(item)}/> 
    }


    return (
        <div>
            {loading ? <Spinner></Spinner> :
           
                internships.map( internship => {
                    return <InternshipItem internship={internship} onPress= {() => onItemPressed(internship)}/> 
                })
            }
        </div>
    )

}

export default InternshipList;