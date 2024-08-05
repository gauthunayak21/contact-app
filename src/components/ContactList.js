import { useEffect, useState } from "react";
import api from '../utils/jwtInterceptor'
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList = () => {

    const [contactList, setContactList] = useState([])

    useEffect(() =>{
        fetchContacts();
    }, []);

    const onDelete = (contactId) => {
        api.delete(`contacts/${contactId}`).then(data => {
            console.log(data)
            fetchContacts();
        }).catch(err => console.log(err))
    }

    const fetchContacts = () => {
        api.get(`contacts`).then((data) => {
            setContactList(data?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="flex justify-center flex-col mx-auto w-1/2">
        <div className="flex justify-between align-middle items-center">
        <h1>Contact List</h1>
        <Link to='/addContact'> <button className="border-blue-400 bg-blue-400 rounded p-2 m-2 text-white">Add Contact</button></Link>
        </div>
        {
            contactList.map(contact => <ContactCard key={contact._id} contact={contact} onDelete={onDelete} />)
        }
        </div>
    )
}

export default ContactList;