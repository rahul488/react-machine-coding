import { Box } from '@mui/material'
import React from 'react'
import Header from './Drawer/Header'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function Index() {
  return (
    <Box>
        <RouterProvider router={router} />
    </Box>
  )
}

export default Index