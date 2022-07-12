import { Button as MuiButton } from '@mui/material'

const notion_style = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgb(46 170 220)',
    borderRadius: '3px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
    },
}

const Button = ({ ...props }) =><MuiButton sx={notion_style} disableElevation {...props}/>

export default Button
