import React, { Component, createContext } from 'react'

interface Customer {
    firstName: string
}
interface State{
    user: Customer
}

interface ContextProps extends State {
    addFirstName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const UserContext = createContext<ContextProps>({
    user: {
        firstName: '',
    },
    addFirstName: () => {},
});

class UserProvider extends Component<{}, State> {

    state: State = {
        user: {
            firstName: ''
        }
    }


    addFirstName = (e: any) => {
    }

    // componentDidUpdate = () => {
            // localStorage
    // }

    render() {
        return (
            <UserContext.Provider value={{
                user: {
                    firstName: this.state.user.firstName
                },
                addFirstName: this.addFirstName,
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;
