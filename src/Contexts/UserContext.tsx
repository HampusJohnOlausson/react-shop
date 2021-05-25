import React, { Component, createContext } from 'react'

interface Customer {
    firstName: string,
    lastName: string,
    mail: string,
    phoneNumber: string,
    adress: string,
    zip: string,
    city: string,
}
interface State{
    user: Customer
}

interface ContextProps extends State {
  addFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addMail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addPhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addAdress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addZipCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addInfoToObject: (e: React.FormEvent) => void;
}
export const UserContext = createContext<ContextProps>({
    user: {
        firstName: '',
        lastName: '',
        mail: '',
        phoneNumber: '',
        adress: '',
        zip: '',
        city: ''
    },
    addFirstName: () => {},
    addLastName: () => {},
    addMail: () => {},
    addPhoneNumber: () => {},
    addAdress: () => {},
    addZipCode: () => {},
    addCity: () => {},
    addInfoToObject: () => {},
});

class UserProvider extends Component<{}, State> {
  state: State = {
    user: {
      firstName: "",
      lastName: "",
      mail: "",
      phoneNumber: "",
      adress: "",
      zip: "",
      city: "",
    },
  };

  addFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, firstName: e.target.value } });
    console.log(this.state.user.firstName);
  };

  addLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, lastName: e.target.value } });
    console.log(this.state.user.lastName);
  };

  addMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, mail: e.target.value } });
    console.log(this.state.user.mail);
  };

  addPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, phoneNumber: e.target.value },
    });
    console.log(this.state.user.phoneNumber);
  };

  addAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, adress: e.target.value } });
    console.log(this.state.user.adress);
  };

  addZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, zip: e.target.value } });
    console.log(this.state.user.zip);
  };

  addCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, city: e.target.value },
    });
    console.log(this.state.user.city);
  };

  addInfoToObject = (e: React.FormEvent) => {
    e.preventDefault();

    const newCustomer = {
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      mail: this.state.user.mail,
      phoneNumber: this.state.user.phoneNumber,
      adress: this.state.user.adress,
      zip: this.state.user.zip,
      city: this.state.user.city,
    };

    console.log(newCustomer);

    if (this.state.user.firstName !== "") {
    }
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: {
            firstName: this.state.user.firstName,
            lastName: this.state.user.lastName,
            mail: this.state.user.mail,
            phoneNumber: this.state.user.phoneNumber,
            adress: this.state.user.adress,
            zip: this.state.user.zip,
            city: this.state.user.city,
          },
          addFirstName: this.addFirstName,
          addLastName: this.addLastName,
          addMail: this.addMail,
          addPhoneNumber: this.addPhoneNumber,
          addAdress: this.addAdress,
          addZipCode: this.addZipCode,
          addCity: this.addCity,
          addInfoToObject: this.addInfoToObject,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
