import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

const ButtonStyle = styled(MuiButton)({
  background: 'var(--pink)',
  fontSize: '1.4rem',
  borderRadius: '15px',
  boxShadow: '0',
  color: 'white',
  padding: '8px 20px',
  border: '2px solid white',
  '&:hover': {
    background: 'var(--pink-darker)',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
})

export default function OutlineButton({ href, children }) {
  if (href) {
    return <ButtonStyle href={href}>{children}</ButtonStyle>
  } else {
    return <ButtonStyle>{children}</ButtonStyle>
  }
}

OutlineButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}
