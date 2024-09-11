import React from 'react';
import { Contact } from '../types/Contact';
import ContactCard from './ContactCard';

interface ContactListProps {
  contacts: Contact[];
  onContactUpdated: () => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactUpdated }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} onContactUpdated={onContactUpdated} />
      ))}
    </div>
  );
};

export default ContactList;