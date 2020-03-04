import React from 'react'
import Icon from '@material-ui/core/Icon'

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

        .icon-center {
          display: block;
        }

        .icon-center :global(span) {
          font-size: 50px;
          margin-top: 20px;
        }
      `}</style>
    </span>
  ) : (
    ''
  )

  const showTitle = title ? (
    <h1>
      {title}
      {showIcon}
      <style jsx>{`
        h1 {
          text-align: center;
          padding-top: 0;
        }

        :global(.pink) h1 {
          color: white;
          padding-top: 0;
        }
      `}</style>
    </h1>
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

        .grey {
          background: var(--mainGrey);
          margin: 0 -25px;
          padding: 60px 50px;
        }

        .highlight {
          text-align: center;
        }

        .content-wrapper {
          max-width: 1180px;
          margin: 0 auto;
        }

        .center {
          text-align: center;
        }
      `}</style>
    </section>
  )
}
