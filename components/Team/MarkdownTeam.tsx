import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { useAssetPath } from '../../utils/assetPath'

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
  const assetPath = useAssetPath()
  const chunksOfFour = chunkArray(members, 4)

  return (
    <>
      {chunksOfFour.map((memberChunk, key) => {
        return (
          <Grid
            className='row'
            key={key}
            container
            justifyContent='center'
            spacing={4}
          >
            {memberChunk.map((member, key) => {
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  className='member-item'
                  key={key}
                  item
                >
                  <img
                    src={assetPath(`/members/${Object.keys(member)[0]}.jpg`)}
                  />
                  <p className='name'>{Object.values(member)}</p>
                </Grid>
              )
            })}
            <style jsx>{`
              p.name {
                text-align: center;
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
