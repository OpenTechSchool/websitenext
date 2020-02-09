import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Team = ({ discourseGroupName }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [members, setMembers] = useState([])

  // load members on mount
  useEffect(() => {
    setIsLoading(true)

    const team = discourseGroupName || 'opentechschool'

    fetch(
      `https://discourse.opentechschool.org/groups/${team}/members.json?limit=100`
    )
      .then(response => response.json())
      .then(data => {
        // resort items depending on last seen
        // prefer last active users
        const members = data.members
        members.sort((a, b) => {
          if (a.last_seen_at > b.last_seen_at) {
            return -1
          }
          return 1
        })
        setIsLoading(false)
        setMembers(members)
      })
      .catch(() => {
        console.error('could not load discourse members')
      })
  }, [])

  return (
    <>
      {isLoading ? (
        '...'
      ) : (
        <div className='wrapper'>
          <ul>
            {members.map(member => {
              let thumbnail = member.avatar_template.replace('{size}', '256')
              if (thumbnail.slice(0, 4) !== 'http') {
                thumbnail = `//discourse.opentechschool.org/${thumbnail}`
              }
              return (
                <li key={member.name} title={member.name}>
                  <img src={thumbnail} alt={member.username} />
                  <h3>
                    <span>{member.name}</span>
                    <a
                      href={`//discourse.opentechschool.org/users/${member.username}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      @{member.username}
                    </a>
                  </h3>
                  <span>{member.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      <style jsx>{`
        .wrapper {
          max-width: 600px;
          min-height: 600px;
          margin: -20px auto 0 auto;
          text-align: center;
        }

        .tweets-from {
          margin-bottom: 20px;
        }

        h1 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

Team.propTypes = {
  discourseGroupName: PropTypes.string,
}

export default Team
