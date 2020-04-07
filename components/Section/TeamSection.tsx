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
        .team-members :global(.member-item) {
          text-align: center;
          width: 200px;
        }
        .team-members :global(img) {
          width: 150px;
          height: 150px;
          border: 4px solid #fff;
          border-radius: 150px;
          margin: 0 auto 20px auto;
        }
        .team-members :global(.row) {
          margin-bottom: 40px;
        }
        .team-members :global(.row:last-child) {
          margin-bottom: 0;
        }

        .team-members :global(.member-title) {
          text-align: center;
        }
      `}</style>
    </TextSection>
  )
}

TeamSection.propTypes = {
  frontmatter: PropTypes.object,
}

export default TeamSection
