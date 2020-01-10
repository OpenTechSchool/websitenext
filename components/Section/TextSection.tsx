export default function TextSection({ classname, title, children }) {
  return (
    <section className={classname}>
      <h1>{title}</h1>
      <div className='content-wrapper'>{children}</div>
      <style jsx>{`
        section {
          padding: 40px 25px;
        }

        h1 {
          text-align: center;
        }

        .pink {
          background: var(--pink);
          color: white;
          line-height: 28px;
          margin: 0 -25px;
        }

        .pink h1 {
          color: white;
          padding-top: 0;
        }

        .grey {
          background: var(--mainGrey);
          margin: 0 -25px;
        }

        .grey h1 {
          padding-top: 0;
        }

        .highlight {
          text-align: center;
        }

        section:last-child {
          margin-bottom: -40px;
        }
      `}</style>
    </section>
  )
}
