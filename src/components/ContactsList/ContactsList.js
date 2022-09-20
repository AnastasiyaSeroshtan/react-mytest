export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
        {contacts.map(({id, name, surname}) => (
            <li key={id}>
                <span>{name}</span>
                <span>{surname}</span>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
    )
}