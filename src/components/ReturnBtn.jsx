import React from 'react'
import { Button } from '@mui/material'

const ReturnBtn = () => {
    return (
        <a href="https://main--startling-bienenstitch-220eca.netlify.app" sx={{zIndex:'2'}}>
            <Button variant='outlined' size='medium' sx={{position: 'sticky', zIndex: '2', left: '10px', top: '10px'}}>
                Wróć do portfolio
            </Button>
        </a>
    )
}

export default ReturnBtn
