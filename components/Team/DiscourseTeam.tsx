import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const Team = ({ discourseGroupName }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [members, setMembers] = useState([])

  function chunkArray(array, size) {
    const chunkedArray = []
    let index = 0
    while (index < array.length) {
      chunkedArray.push(array.slice(index, size + index))
      index += size
    }
    return chunkedArray
  }

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
        let members = data.members
        members.sort((a, b) => {
          if (a.last_seen_at > b.last_seen_at) {
            return -1
          }
          return 1
        })
        members = chunkArray(members, 4)
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
        <>
          {members.map((memberChunk, key) => {
            return (
              <Grid
                className='row'
                key={key}
                container
                justify='center'
                spacing={4}
              >
                {memberChunk.map(member => {
                  let thumbnail = member.avatar_template.replace(
                    '{size}',
                    '256'
                  )
                  if (thumbnail.slice(0, 4) !== 'http') {
                    thumbnail = `//discourse.opentechschool.org/${thumbnail}`
                  }
                  return (
                    <Grid className='item' item key={member.name}>
                      <img src={thumbnail} alt={member.username} />
                      <p className='name'>{member.name}</p>
                      <p>
                        <a
                          href={`//discourse.opentechschool.org/users/${member.username}`}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          @{member.username}
                        </a>
                      </p>
                      <p className='member-title'>{member.title}</p>
                    </Grid>
                  )
                })}
                <style jsx>{`
                  p {
                    margin: 0;
                  }
                  p.name {
                    font-weight: bold;
                    font-size: 24px;
                  }
                  p.member-title {
                    text-transform: uppercase;
                    font-size: 18px;
                  }
                  a {
                    color: #fff;
                    font-weight: normal;
                    font-size: 16px;
                  }
                `}</style>
              </Grid>
            )
          })}
        </>
      )}
    </>
  )
}

Team.propTypes = {
  discourseGroupName: PropTypes.string,
}

export default Team
