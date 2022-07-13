import { Button as MuiButton } from '@mui/material'
import { Children } from 'react'

interface Props {
    variant?:
    | 'contained'
    | 'outlined'

    size?:
    | 'small'
    | 'medium'
    | 'large'

    children?: React.ReactNode
}

const reset_styles = {
    textTransform: 'none',
}
    
const Button = ({ ...props }: Props) =><MuiButton color='primary' sx={reset_styles} disableElevation {...props}>{Children}</MuiButton>

export default Button
