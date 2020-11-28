import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classes from './ContactList.module.css';

const ContactList = function ({ array, deleteItem }) {
  return (
    <ul className={classes.contactList}>
      {array.map(item => (
        <li key={uuidv4()}>
          {item.name}: {item.number}
          <button type="button" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteItem: PropTypes.func.isRequired,
};
