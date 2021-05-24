import React, { Component, createContext } from 'react'

interface Customer {
    firstName: string
}
interface State{
    user: Customer
}

interface ContextProps extends State {
  addFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addInfoToObject: (e: React.FormEvent) => void;
}
export const UserContext = createContext<ContextProps>({
    user: {
        firstName: '',
    },
    addFirstName: () => {},
    addInfoToObject: () => {},
});

class UserProvider extends Component<{}, State> {
  state: State = {
    user: {
      firstName: '',
    },
  };

  addFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ user: {...this.state.user, firstName: e.target.value } });
      console.log(this.state.user.firstName);
  };

  // componentDidUpdate = () => {
  // localStorage
  // }

  addInfoToObject = (e: React.FormEvent) => {
      e.preventDefault();

      const newCustomer = {
          firstName: this.state.user.firstName,
      }

      console.log(newCustomer);

      if(this.state.user.firstName !== ''){
      }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: {
            firstName: this.state.user.firstName,
          },
          addFirstName: this.addFirstName,
          addInfoToObject: this.addInfoToObject,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
