import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firestore} from '../firebase'
import {Spinner, Button, Card} from 'react-bootstrap';
import  InternshipList from '../components/InternshipList'
import { Link, useNavigate } from 'react-router-dom'

export default function InternshipDetailPage() {

    const [internships,setInternships]=useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);

        getData().then((docs) => {

            setInternships(docs);
            setLoading(false);
        });
    },[])

    let getData = async () => {
        const internshipsSnapshots =  await firestore
            .collection("internships")
            .get()
            .then((docsRef) => {
                const eventList = docsRef.docs.map((ref) => {
                    const data = ref.data()
                    return {
                        id: ref.id,
                        ...data
                    }
                })

                return eventList;
            })

        return internshipsSnapshots;
    }

    console.log("internship fetched are:", internships)
    console.log("internship id stored in local storage", localStorage.getItem("iid"))
    return (
        <div>
            <p>  {' '}</p>
            {loading ? <Spinner/> :
                <div>
                    {internships.filter(internship => internship.id.includes(localStorage.getItem("iid"))).map(internship => (
                        <Card>
                            <Card.Body>
                                <Card.Subtitle>Domain: {internship.domain}</Card.Subtitle>
                                <Card.Subtitle>Creator: {internship.creator}</Card.Subtitle>
                                <Card.Subtitle>Salary: {internship.salary}</Card.Subtitle>
                                <Card.Subtitle>Period: {internship.period}</Card.Subtitle>
                                <Card.Subtitle>Experience: {internship.experience}</Card.Subtitle>
                                <Card.Text>{internship.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            }
            <Button
                variant="secondary"
                href={"/add"}
                style={{width: "100%"}}
            >APPLY TO INTERNSHIP</Button>
            <p></p>
            <Button
            variant="secondary"
            href={"/"}
            style={{width: "100%"}}
            >BACK</Button>
        </div>
    );
}