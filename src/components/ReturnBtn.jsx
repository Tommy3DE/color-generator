import React from 'react'
import { Button } from '@mui/material'

const ReturnBtn = () => {
    return (
        <a href="https://63d14f15b8305d4d556107bf--startling-bienenstitch-220eca.netlify.app/?fbclid=IwAR15QoCcO4CvjPsP6s9XFXjzsA-U0MZzl_LF9BaMIUGoS9jBG0GNkjygFkY" sx={{zIndex:'2'}}>
            <Button variant='outlined' size='medium' sx={{position: 'sticky', zIndex: '2', left: '10px', top: '10px'}}>
                Wróć do portfolio
            </Button>
        </a>
    )
}

export default ReturnBtn
