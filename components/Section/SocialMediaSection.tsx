import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import TextSection from './TextSection'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
export default function SocialMediaSection({ bgColor = '' }) {
  const iconStyle = {
    fontSize: 50,
    color: bgColor !== '' ? 'white' : 'var(--mainBlue)',
  }
  return (
    <TextSection title='' classname={`center ${bgColor}`}>
      <h4 className={bgColor !== '' ? 'with-bgColor' : ''}>Connect</h4>
      <Grid container justifyContent='center'>
        <Grid item xs={3} md={1}>
          <a
            href='https://www.facebook.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <FacebookIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item xs={3} md={1}>
          <a
            href='http://discourse.opentechschool.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <svg
              className='discourse-svg'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563c-2.593-.003-4.996 1.352-6.337 3.57-1.33 2.208-1.387 4.957-.148 7.22L4.4 19.61l4.794-1.074c2.745 1.225 5.965.676 8.136-1.39 2.17-2.054 2.86-5.228 1.737-7.997-1.135-2.778-3.84-4.59-6.84-4.585h-.008z' />
            </svg>
          </a>
        </Grid>
        <Grid item xs={3} md={1}>
          <a
            href='https://github.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <GitHubIcon style={iconStyle} />
          </a>
        </Grid>
      </Grid>
      <style jsx>{`
        h4 {
          text-align: center;
        }

        .with-bgColor {
          color: white;
        }

        .discourse-svg {
          width: 45px;
          height: 45px;
          fill: #2d9cdb;
        }
      `}</style>
    </TextSection>
  )
}

SocialMediaSection.propTypes = {
  bgColor: PropTypes.string,
}
