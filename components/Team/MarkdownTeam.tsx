import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function chunkArray(array, size) {
  const chunkedArray = []
  let index = 0
  while (index < array.length) {
    chunkedArray.push(array.slice(index, size + index))
    index += size
  }
  return chunkedArray
}

const TeamSection = ({ members }) => {
  const chunksOfFour = chunkArray(members, 4)

  return (
    <>
      {chunksOfFour.map((memberChunk, key) => {
        return (
          <Grid
            className='row'
            key={key}
            container
            justify='center'
            spacing={4}
          >
            {memberChunk.map((member, key) => {
              return (
                <Grid className='item' key={key} item>
                  <img src={`/members/${Object.keys(member)[0]}.jpg`} />
                  <p className='name'>{Object.values(member)}</p>
                </Grid>
              )
            })}
            <style jsx>{`
              p.name {
                font-weight: bold;
                font-size: 20px;
              }
            `}</style>
          </Grid>
        )
      })}
    </>
  )
}

TeamSection.propTypes = {
  members: PropTypes.array,
}

export default TeamSection
