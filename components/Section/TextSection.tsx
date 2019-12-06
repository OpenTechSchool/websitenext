export default function TextSection({ classname, title, children }) {
  return (
    <section className={classname}>
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        section {
          padding: 40px 0;
        }

        h2 {
          text-align: center;
          padding-top: 0;
        }

        .pink {
          background: var(--pink);
          color: white;
          line-height: 28px;
          margin: 0 -25px;
          padding: 40px 25px;
        }

        .pink h2 {
          color: white;
        }

        .grey {
          background: var(--mainGrey);
          margin: 0 -25px;
          padding: 40px 25px;
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
