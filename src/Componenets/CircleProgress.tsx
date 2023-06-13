import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from './ProgressProvider';


type props={
    percentage:number
}

function CircleProgress({percentage}:props) {
  return (
   <ProgressProvider valueStart={10} valueEnd={percentage}>
   {value=>  <CircularProgressbar value={value} text={`${value}%`}  />}
    </ProgressProvider> 
  )
}

export default CircleProgress
