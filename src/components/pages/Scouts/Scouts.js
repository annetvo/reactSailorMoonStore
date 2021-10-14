import React from 'react'
import ScoutsSection from '../../ScoutsSection';
import {scoutObjOne} from './ScoutsData';

function Scouts() {
    return (
        <ul>
          {scoutObjOne.map(person => {
            return (
              <li key={person.id}>
                {person.name} - {person.age} years old
              </li>
            )
          })}
        </ul>
      );
    }

export default Scouts
