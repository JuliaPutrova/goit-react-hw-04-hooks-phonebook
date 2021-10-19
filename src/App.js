import { useState, useEffect } from 'react';

import { ContactTitle } from './App.styled';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? contactsArray;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //метод добавления нового контакта
  const handleSubmitForm = data => {
    //проверка на дублируемый номер телефона
    if (
      contacts.some(contact =>
        contact.name.toLowerCase().includes(data.name.toLowerCase()),
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts([data, ...contacts]);
  };

  //метод для удаления контакта
  const onDeleteContact = id => {
    setContacts([...contacts.filter(contact => contact.id !== id)]);
  };

  //метод-фильтр (прослушивание input)
  const handleFilteredInput = e => {
    setFilter(e.target.value);
  };

  //метод для фильтра контактов
  const onFilteredContacts = () => {
    //приводим текс к нижнему регистру и удаляем пробелы по бокам
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter),
    );
  };

  return (
    <Container title="Phonebook">
      <ContactForm onSubmit={handleSubmitForm} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} filteredValue={handleFilteredInput} />
      <ContactList
        title="Contacts"
        deleteContact={onDeleteContact}
        contacts={onFilteredContacts()}
      ></ContactList>
    </Container>
  );
}

export default App;

// ////////////////////классовый Компонент
// import React, { Component } from 'react';
// import shortid from 'shortid';

// import { ContactTitle } from './App.styled';

// import Container from './components/Container/Container';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     // contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   //метод добавления нового контакта
//   handleSubmitForm = ({ name, number }) => {
//     const addNewContact = {
//       id: shortid.generate(),
//       //короткая запись свойств объекта
//       name,
//       number,
//     };

//     //проверка на дублируемый номер телефона
//     this.state.contacts.some(
//       contact =>
//         contact.name.toLowerCase() === addNewContact.name.toLowerCase(),
//     )
//       ? alert(`${name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [addNewContact, ...prevState.contacts],
//         }));
//   };

//   // componentDidMount = () => {
//   //   const contacts = JSON.parse(localStorage.getItem('contacts'));
//   //   if (contacts !== null) {
//   //     this.setState({
//   //       contacts,
//   //     });
//   //   }
//   // };

//   //метод забирает данные из локального хранилища
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   //метод забирает данные из локального хранилища
//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     //проверка: если предыдущие контакты не равны следующим контактам, тогда записываем контакты в локальное хранилище
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   // componentDidUpdate = (prevProps, prevState) => {
//   //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   // };

//   //метод для удаления контакта
//   onDeleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   //метод-фильтр (прослушивание input)
//   handleFilteredInput = e => {
//     this.setState({
//       filter: e.target.value,
//     });
//   };

//   //метод для фильтра контактов
//   onFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     //приводим текс к нижнему регистру и удаляем пробелы по бокам
//     const normalizedFilter = filter.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().trim().includes(normalizedFilter),
//     );
//   };

//   render() {
//     //деструктуризация
//     const { filter } = this.state;

//     return (
//       <Container title="Phonebook">
//         <ContactForm addNewContact={this.handleSubmitForm} />
//         <ContactTitle>Contacts</ContactTitle>
//         <Filter value={filter} filteredValue={this.handleFilteredInput} />
//         <ContactList
//           title="Contacts"
//           deleteContact={this.onDeleteContact}
//           contacts={this.onFilteredContacts()}
//         ></ContactList>
//       </Container>
//     );
//   }
// }

// export default App;
