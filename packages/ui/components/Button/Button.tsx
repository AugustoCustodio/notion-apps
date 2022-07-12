import { Button as MuiButton } from '@mui/material'

interface Props {
    variant?:
    | 'contained'
    | 'outlined'

    size?:
    | 'small'
    | 'medium'
    | 'large'
}

const reset_styles = {
    textTransform: 'none',
}
    
const Button = ({ ...props }: Props) =><MuiButton color='primary' sx={reset_styles} disableElevation {...props}/>

export default Button
