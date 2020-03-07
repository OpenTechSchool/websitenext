import Grid from '@material-ui/core/Grid'
import TextSection from './TextSection'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

export default function SocialMediaSection() {
  const iconStyle = {
    fontSize: 50,
    color: 'var(--mainBlue)',
  }
  return (
    <TextSection title='' classname='center'>
      <h4>Connect</h4>
      <Grid container justify='center'>
        <Grid item md={1}>
          <a
            href='https://www.facebook.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item md={1}>
          <a
            href='https://twitter.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon style={iconStyle} />
          </a>
        </Grid>
        <Grid item md={1}>
          <a
            href='https://github.com/OpenTechSchool'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon style={iconStyle} />
          </a>
        </Grid>
      </Grid>
      <style jsx>{`
        h4 {
          text-align: center;
        }
      `}</style>
    </TextSection>
  )
}
