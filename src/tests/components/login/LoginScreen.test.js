import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { MemoryRouter, Route } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }


    const history = {
        replace: jest.fn(),
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter >
                <LoginScreen history={history}/>
            </MemoryRouter>
        </AuthContext.Provider>
    );


    test('debe mostrarse correctamente ', () => {
        
    
        expect(wrapper).toMatchSnapshot();
  

    })

    test('debe realizar el dispatch y la navegacion ', () => {
        
      
      
        const action = {
            type: types.login,
            payload: { name: 'Franco'  }
        }
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith(action)
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1)
     
        expect(history.replace).toHaveBeenCalled();

    })
    
 
    
 

   

  

})
