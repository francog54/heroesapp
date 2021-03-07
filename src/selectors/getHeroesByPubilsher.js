import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroesByPubilsher = ( publisher ) => {
    const validadPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validadPublishers.includes( publisher ) ){
        throw new Error (`Publisher ${ publisher } no es correcto`)
    }

    return heroes.filter( hero => hero.publisher === publisher )
}
