import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firestore} from '../firebase'
import { Spinner } from 'react-bootstrap';
import  InternshipList from '../components/InternshipList'

export default function InternshipsListPage() {

    const [internships,setInternships]=useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        getData().then((docs) => {

            setInternships(docs);
            setLoading(false);
        });
    },[])


    const onItemPressed = (item) => {
        console.log("Item is pressed", item);
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
        <>
    {loading ? <Spinner></Spinner> : 
    
        <InternshipList
            internships={internships}
            onItemPressed ={onItemPressed}
            loading = {loading}
        >
        </InternshipList>
    }

        </>
    );
}