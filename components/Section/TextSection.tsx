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
  children,
}: TextSectionProps) {
  const showTitle = title ? (
    <h1>
      {title}
      {iconDirection === 'center' ? (
        <div className='icon'>
          <WrappedIcon>{icon}</WrappedIcon>
        </div>
      ) : (
        <span className='icon'>
          <WrappedIcon>{icon}</WrappedIcon>
        </span>
      )}
      <style jsx>{`
        h1 {
          text-align: center;
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
          padding: 40px 25px;
        }

        .pink {
          background: var(--pink);
          color: white;
          line-height: 28px;
          margin: 0 -25px;
          padding: 40px 50px;
        }

        .grey {
          background: var(--mainGrey);
          margin: 0 -25px;
          padding: 40px 50px;
        }

        .grey h1 {
          padding-top: 0;
        }

        .highlight {
          text-align: center;
        }

        .content-wrapper {
          max-width: 1280px;
          margin: 0 auto;
        }

        .center {
          text-align: center;
        }
      `}</style>
    </section>
  )
}
