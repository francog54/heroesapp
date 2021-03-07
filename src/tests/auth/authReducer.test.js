import React from 'react';
import { shallow } from 'enzyme'
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

authReducer

describe('Pruebas en authReducer', () => {
    
    const wrapper = shallow( <authReducer /> );



    test(' Debe retonar el estado por defecto', () => {

        const state = authReducer({ logged:false }, {})
        
        expect( state ).toEqual({ logged:false } )

    })

    test(' autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: { name: 'Franco'  }
        }

        const state = authReducer({ logged:true }, action)
        
        expect( state ).toEqual({ logged:true, name: 'Franco' })
        
    })

    test(' debe borrar el name del usuario, y logged en false', () => {

        const action = {
            type: types.logout,
            payload: {}
        }

        const state = authReducer({ logged:true }, action)
        
        expect( state ).toEqual({ logged:false })
        
    })
    

})
