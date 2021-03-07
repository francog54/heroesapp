import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <SearchScreen/>', () => {



    const wrapper = mount(
        //<AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        //</AuthContext.Provider>
    );


    test('debe mostrarse correctamente con valores por defecto ', () => {
        
    
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero'); 
        
    })

    test('debe mostrar a batman y el input con el valor del queryString ', () => {
        
        const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <Route path="/search" component={SearchScreen} />
                </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman'); 
        
    }) 


    test('debe mostrar un error si no se encuentra el hero', () => {
        
        const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman123232']}>
                    <Route path="/search" component={SearchScreen} />
                </MemoryRouter>
        );
       
    
        expect(wrapper.find('.alert-danger').exists()).toBe(true)
       
        
    }) 

    test('debe llamar el push del history', () => {

        const history = {
            push: jest.fn(),
        };
        
        const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <Route path="/search" component={ () => <SearchScreen history={history}/> }/>
                </MemoryRouter>
        );
       
            wrapper.find('input').simulate('change',{
                target:{
                    name: 'SearchText',
                    value: 'batman'
                }
            })

            wrapper.find('form').prop('onSubmit')({
                preventDefault(){}
            })

            expect(history.push).toHaveBeenCalledWith(`?q=batman`);
       
        
    }) 
    


})
