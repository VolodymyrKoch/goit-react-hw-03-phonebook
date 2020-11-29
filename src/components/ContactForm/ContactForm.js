import React, { Component } from 'react';
import classes from './ContactForm.module.css';

const INITIAL_STATE = { name: '', number: '' };

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContacts({ ...this.state });
    this.setState({ name: '', number: '' }); //1 варіант очищаю input після submit(відправки)
    // this.setState(INITIAL_STATE);  //2 варіант очищаю input після submit(відправки)
  };

  render() {
    return (
      <>
        <h2 className={classes.tilie}>Phonebook</h2>
        <div className={classes.contactFormConteiner}>
          <form
            action="submit"
            className={classes.contactForm}
            onSubmit={this.handleSubmit}
          >
            <div className={classes.lableName}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.lableName}>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                placeholder="enter number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Add contacts</button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
