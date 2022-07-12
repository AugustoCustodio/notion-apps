import { Button as MuiButton, ButtonProps } from '@mui/material'

const Button = ({ ...props }: ButtonProps) =><MuiButton fullWidth {...props}/>

export default Button
