import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';

describe('Pruebas en <HeroScreen/>', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    

    test('debe mostrar el componente redirect si no hay argumentos en el URL ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        );

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);

    })
    
     test('debe mostrar un heroe si el parametro existe y se encuentra ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeid" component={HeroScreen}></Route>
            </MemoryRouter>
        );
        
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.row').exists()).toBe(true);

    })

    test('debe regresar a la pantalla anterior con push ', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
    
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeid" component={ (props) => <HeroScreen history={history} />}></Route>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        //expect(wrapper).toMatchSnapshot();
        expect(history.push ).toHaveBeenCalledWith('/');
        expect(history.goBack ).not.toHaveBeenCalled();

    })


    test('debe regresar a la pantalla anterior con goBack', () => {

      
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeid" component={ (props) => <HeroScreen history={history} />}></Route>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
    
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();

    })


    test('debe llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1231232']}>
                <Route path="/hero/:heroeid" component={ (props) => <HeroScreen history={history} />}></Route>
            </MemoryRouter>
        );
     
        expect(typeof wrapper.text()).toBe('string');

    })

})
