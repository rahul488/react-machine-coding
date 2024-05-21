import React, { useState } from 'react'
import { Box, duration } from '@mui/material'
import A from './A'
import B from './B'

function Mc11() {
  const [aCount,setAcount]=useState(0);
  const [bCount,setBCount] = useState(0);
  //const [address,setAddress]=useState({name:'xyz'})

  return (
    <Box>
      <A count={aCount} setAcount={setAcount} />
      <B count={bCount} setBCount={setBCount} />
    </Box>
  )
}

export default Mc11