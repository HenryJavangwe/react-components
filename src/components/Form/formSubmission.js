import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse',
    width: '500px',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      // borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px',
      width:'600px',
      padding: '10px',
      fontSize:'16px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

export function PhoneBookForm({ 
  addEntryToPhoneBook, 
  userFirstname,
  userLastname,
  userPhone, 
  setUserFirstname,
  setUserLastname,
  setUserPhone
  }) {
  return (
    <form onSubmit={e => { addEntryToPhoneBook(e)}} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userFirstname}
        onChange={ e => {setUserFirstname(e.target.value)}}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userLastname}
        onChange={ e => {setUserLastname(e.target.value)}}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userPhone}
        onChange={ e => {setUserPhone(e.target.value)}}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

export function InformationTable( {contacts}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {
          contacts.map(
            (contact)=> {
            return (
            <tr>
              <td>{contact.userFirstname}</td>
              <td>{contact.userLastname}</td>
              <td>{contact.userPhone}</td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default function Application(props) {
  const [contacts, setContacts] = useState([])

  const [userFirstname, setUserFirstname] = useState('Coder');
  const [userLastname, setUserLastname] = useState('Byte');
  const [userPhone, setUserPhone] = useState('8885559999');

  //  will handle submission 
  const addEntryToPhoneBook = (e)=>{
    e.preventDefault(); 

    setContacts([...contacts, {
      'userFirstname': userFirstname,
      'userLastname': userLastname,
      'userPhone': userPhone
    }])
  }

  console.log('Form Submitted: ' + JSON.stringify(contacts))

  return (
    <section>
      <PhoneBookForm 
        addEntryToPhoneBook={addEntryToPhoneBook}
        userFirstname={userFirstname}
        userLastname={userLastname}
        userPhone={userPhone}
        setUserFirstname={setUserFirstname}
        setUserLastname={setUserLastname}
        setUserPhone={setUserPhone}
      />
      <InformationTable contacts={contacts}/>
    </section>
  );
}
