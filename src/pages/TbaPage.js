import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom'

export default function TbaPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Password do not match!')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">This page is under construction and is not part of the prototype.</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                </Card.Body>
            </Card>
        </>
    )
}