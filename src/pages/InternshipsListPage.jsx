import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firestore} from '../firebase'
import { Spinner, Button } from 'react-bootstrap';
import  InternshipList from '../components/InternshipList'
import { Link, useNavigate } from 'react-router-dom'

export default function InternshipsListPage() {

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


    const onItemPressed = (item) => {
        console.log("Item is pressed", item);
        console.log("is",item.id)
        localStorage.setItem("iid",item.id)
        navigate('/internship/'+item.id)
    }

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

    console.log(loading, internships)

    return (
        <div>
            <Button
                variant="secondary"
                href={"/add"}
                style={{width: "100%"}}
            >ADD INTERNSHIP</Button>
            <p>  {' '}</p>
            {loading ? <Spinner/> :
                        <InternshipList
                            internships={internships}
                            onItemPressed={onItemPressed}
                            loading={loading}
                        />
            }
        </div>
    );
}