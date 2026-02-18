import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

const ButtonStyle = styled(MuiButton)({
  background: 'var(--pink)',
  border: 0,
  borderRadius: '10px',
  boxShadow: '0',
  color: 'white',
  padding: '8px 20px',
  fontSize: '18px',
  textTransform: 'inherit',
  '&:hover': {
    background: 'var(--pink-darker)',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
})

export default function Button({ href, children }) {
  if (href) {
    return <ButtonStyle href={href}>{children}</ButtonStyle>
  } else {
    return <ButtonStyle>{children}</ButtonStyle>
  }
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}
