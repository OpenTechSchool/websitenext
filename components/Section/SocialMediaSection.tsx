import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextSection from './TextSection'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'


export default function SocialMediaSection({ bgColor = '' }) {
  const iconStyle = {
    fontSize: 50,
    color: bgColor !== '' ? 'white' : 'var(--mainBlue)',
  }
  return (
    <TextSection title='' classname={`center ${bgColor}`}>
      <h4 className={bgColor !== '' ? 'with-bgColor' : ''}>Connect</h4>
      <Grid container justify='center'>
        <Grid item xs={4} md={1}>
          <a
            href='https://www.facebook.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <FacebookIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item xs={4} md={1}>
          <a
            href='https://twitter.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <TwitterIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item xs={4} md={1}>
          <a
            href='http://discourse.opentechschool.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <img
              src='/discourse_blue_icon.png'
              style={iconStyle}
              alt='discourse'
              className='iconImg'
            />
          </a>
        </Grid>
        <Grid item xs={4} md={1}>
          <a
            href='https://github.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <GitHubIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item xs={4} md={1}>
          <a
            href='https://instagram.com/opentechschool_leipzig'
            target='_blank'
            rel='noopener noreferrer'
            className='icon'
          >
            <InstagramIcon style={iconStyle} />
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

        .iconImg {
          width: 50px;
          margin: 0 auto;
        }
      `}</style>
    </TextSection>
  )
}

SocialMediaSection.propTypes = {
  bgColor: PropTypes.string,
}
