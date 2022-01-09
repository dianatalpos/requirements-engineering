import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {firestore} from "../firebase";

export default function AddInternshipPage() {
    const creatorRef = useRef()
    const descriptionRef = useRef()
    const domainRef = useRef()
    const experienceRef = useRef()
    const periodRef = useRef()
    const salaryRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Asdasda")

        try{
            setError('')
            setLoading(true)

            const newInternship = {
                creator: creatorRef.current.value,
                description: descriptionRef.current.value,
                domain: domainRef.current.value,
                experience: experienceRef.current.value,
                period: periodRef.current.value,
                salary: salaryRef.current.value
            }

            await firestore.collection("/internships")
                .add(newInternship).then(() => {
                    console.log("works");
                })
                .catch((error) => {
                    console.log(error);
                });
            navigate("/")
        } catch(error) {
            setError('Failed to create a new internship');
            console.log(error);
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Create internship</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="creator">
                            <Form.Label>Creator</Form.Label>
                            <Form.Control type="text" ref={creatorRef} required/>
                        </Form.Group>

                        <Form.Group id="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" ref={descriptionRef} required/>
                        </Form.Group>

                        <Form.Group id="domain">
                            <Form.Label>Domain</Form.Label>
                            <Form.Control type="text" ref={domainRef} required/>
                        </Form.Group>

                        <Form.Group id="experience">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="text" ref={experienceRef} required/>
                        </Form.Group>

                        <Form.Group id="period">
                            <Form.Label>Period</Form.Label>
                            <Form.Control type="text" ref={periodRef} required/>
                        </Form.Group>

                        <Form.Group id="salary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" ref={salaryRef} required/>
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-4" type="submit">CREATE</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    )
}