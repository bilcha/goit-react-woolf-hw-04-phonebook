import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
