import React from 'react';

import { ListWrapper, ItemStyle, DeleteBtn } from './Contacts.styled';

export function Contacts({ contacts, onDeleteContact }) {
  return (
    <ListWrapper>
      {contacts.map(contact => (
        <ItemStyle key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </ItemStyle>
      ))}
    </ListWrapper>
  );
}
