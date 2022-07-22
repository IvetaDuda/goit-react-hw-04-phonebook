import PropTypes from 'prop-types';

import ContactsElementList from '../ContactsElementList';

import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      <ContactsElementList contacts={contacts} onDelete={onDelete} />
    </List>
  );
};
export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDelete: PropTypes.func.isRequired,
    })
  ),
};
