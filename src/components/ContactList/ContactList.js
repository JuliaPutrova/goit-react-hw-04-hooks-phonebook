import React from 'react';
import { ContactItem, BtnDelete } from './ContactList.styled';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={shortid.generate()}>
          <p>
            {name}: {number}
          </p>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </BtnDelete>
        </ContactItem>
      ))}
    </ul>
  );
}

ContactList.defaultProps = {
  id: null,
};

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// ////////////
// import React from 'react';
// import { ContactItem, BtnDelete } from './ContactList.styled';
// import PropTypes from 'prop-types';

// function ContactList({ title, contacts, deleteContact }) {
//   return (
//     <ul>
//       {contacts.map(({ name, number, id }) => (
//         <ContactItem key={id}>
//           <p>
//             {name}: {number}
//           </p>
//           <BtnDelete type="button" onClick={() => deleteContact(id)}>
//             Delete
//           </BtnDelete>
//         </ContactItem>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   title: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
