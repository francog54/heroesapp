import React,{useMemo} from 'react'
import { getHeroesByPubilsher } from '../../selectors/getHeroesByPubilsher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPubilsher( publisher ), [ publisher ])
    //const heroes = getHeroesByPubilsher( publisher );

    return (
        <div className="card-columns animate__animated animate__fadeIn" >
       
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } /> 
                ) )
            }
      
        </div>
    )
}
