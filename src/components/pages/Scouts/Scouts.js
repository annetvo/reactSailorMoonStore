import React from 'react'
import ScoutsSection from '../../ScoutsSection';
import {scoutObjOne} from './ScoutsData';

function Scouts() {
  return (
      <>
          <ScoutsSection {...scoutObjOne} />
      </>
  )
}
export default Scouts
