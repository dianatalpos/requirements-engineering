import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firestore} from '../firebase'


export default function InternshipsListPage() {

    const [internships,setInternships]=useState([])
    const [loading, setLoading] = useState(true);

    async function getInternships(db) {
        const internshipsCol = collection(db, 'internships');
        const internshipsSnapshop = await getDocs(internshipsCol);
        const internshipsList = internshipsSnapshop.docs.map(doc => doc.data());
        setInternships(internshipsList);
        console.log(internshipsList);
        return internshipsList;
    }

    useEffect(() => {
        setLoading(true);
        const internshipsList = getData();
        console.log(internshipsList);
        setInternships(internshipsList);
        setLoading(false);
    },[])

    let getData = async () => {
        const internshipsSnapshots = await firestore.collection("internships").get()
        const internshipsList = internshipsSnapshots.docs.map(internship => internship.data())
        return internshipsList;
    }

    console.log(internships);

    return (
        <div className="App" onClick={getData}>
            {
                internships.map(internship=>{
                    return(
                        <div className="blog-container">
                            <h4>{internship.domain}</h4>
                            <p>{internship.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}