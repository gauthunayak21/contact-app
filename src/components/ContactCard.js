
const ContactCard = (props) => {
    const {name, number, email, _id} = props?.contact;

    const deleteContact = () => {
        props.onDelete(_id)
    }
    return(
        <div className="border p-2 m-2 flex justify-between items-center">
        <div className=" p-2 my-2">
            <p>{name}</p>
            <p>{number}</p>
            <p>{email}</p>
        </div>
        <div>
            <button onClick={deleteContact}>Delete</button>
        </div>
        </div>
    )
}

export default ContactCard;