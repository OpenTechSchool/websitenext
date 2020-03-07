import PropTypes from 'prop-types'
import TextSection from '../../components/Section/TextSection'
import MarkdownTeam from '../../components/Team/MarkdownTeam'
import DiscourseTeam from '../../components/Team/DiscourseTeam'

function showDiscourseTeam(frontmatter) {
  return <DiscourseTeam discourseGroupName={frontmatter.discourse_group} />
}

function showMarkdownTeam(frontmatter) {
  return <MarkdownTeam members={frontmatter.members} />
}

const TeamSection = ({ frontmatter }) => {
  const teamMembers = frontmatter.discourse_group
    ? showDiscourseTeam(frontmatter)
    : showMarkdownTeam(frontmatter)

  return (
    <TextSection
      classname='pink'
      title={`Team ${frontmatter.title}`}
      icon='assistant'
      iconDirection='center'
    >
      <div className='team-members'>{teamMembers}</div>
      <style jsx>{`
        :global(.row) {
          margin-bottom: 40px;
        }
        :global(.row:last-child) {
          margin-bottom: 0;
        }
        :global(.item) {
          text-align: center;
        }
        :global(img) {
          margin: 0 auto;
        }
        .team-members :global(img) {
          width: 150px;
          height: 150px;
          border: 4px solid #fff;
          border-radius: 150px;
        }
      `}</style>
    </TextSection>
  )
}

TeamSection.propTypes = {
  frontmatter: PropTypes.object,
}

export default TeamSection
