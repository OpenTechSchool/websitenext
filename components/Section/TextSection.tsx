import React from 'react'
import Icon from '@material-ui/core/Icon'
import { mediaquery } from '../../style/style'

const WrappedIcon = props => <Icon {...props} />
WrappedIcon.muiName = 'Icon'

interface TextSectionProps {
  anchor?: string
  classname?: string
  title?: string
  icon?: string
  iconDirection?: string
  children: React.ReactNode
}

export default function TextSection({
  anchor,
  classname,
  title,
  iconDirection,
  icon,
  children,
}: TextSectionProps) {
  const showIcon = icon ? (
    <span className={iconDirection ? 'icon-center' : 'icon'}>
      <WrappedIcon>{icon}</WrappedIcon>
      <style jsx>{`
        .icon :global(span) {
          font-size: 50px;
          line-height: 60px;
          margin-left: 20px;
        }

        .iconCenter :global(span) {
          font-size: 50px;
          margin-top: 20px;
        }
      `}</style>
    </span>
  ) : (
    ''
  )

  const showTitle = title ? (
    <h2>
      {title}
      {showIcon}
      <style jsx>{`
        h2 {
          text-align: center;
          padding-top: 0;
        }
      `}</style>
    </h2>
  ) : (
    ''
  )

  return (
    <section id={anchor} className={classname}>
      <div className='content-wrapper'>
        {showTitle}
        {children}
      </div>
      <style jsx>{`
        section {
          padding: 60px 25px;
        }

        .pink {
          background: var(--pink);
          color: white;
          line-height: 28px;
          margin: 0 -25px;
          padding: 60px 50px;
        }

        .pink :global(h2),
        .pink :global(h3) {
          color: white;
        }

        .pink :global(a) {
          color: white;
          text-decoration: underline;
        }

        .grey {
          background: var(--mainGrey);
          margin: 0 -25px;
          padding: 60px 50px;
        }

        .ots-blue {
          background: var(--otsColor);
        }

        .highlight {
          text-align: center;
        }

        .content-wrapper {
          max-width: 650px;
          margin: 0 auto;
        }

        .center {
          text-align: center;
        }

        @media (${mediaquery.tabletToDesktop}) {
          .content-wrapper {
            max-width: 1180px;
          }
        }
      `}</style>
    </section>
  )
}
