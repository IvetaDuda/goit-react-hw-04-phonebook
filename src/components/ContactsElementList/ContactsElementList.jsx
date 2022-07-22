import { Contacts, Button } from './ContactsElementList.styled';

const ContactsElementList = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => (
    <Contacts key={id}>
      {name}: {number}
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Contacts>
  ));
};
export default ContactsElementList;
