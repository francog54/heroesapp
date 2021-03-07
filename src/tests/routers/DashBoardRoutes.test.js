import React from 'react';
import { mount } from "enzyme"
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router';



describe('Pruebas en <DashBoardRoutes/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:true,
            name:'Juanito'
        }
    }

    
    test('debe mostrarse correctamente', () => {
            const wrapper = mount(
                <AuthContext.Provider value={ contextValue }>
                    <MemoryRouter>
                    {/* <AppRouter path="/" component={ () => <span>qwewqe</span> } isAuthenticated= { true }> */}
                        <DashboardRoutes/>
                    {/* </AppRouter> */}
                    </MemoryRouter>
                </AuthContext.Provider>
            );

            expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('.text-info').text().trim() ).toBe('Juanito')
    })  
    
    test('Debe mostrar el componente de Marvel si esta autenticado', () => {

    
    })  
    
})
