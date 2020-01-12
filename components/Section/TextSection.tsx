export default function TextSection({ classname, title, children }) {
  return (
    <section className={`${classname} content-wrapper`}>
      <h1>{title}</h1>
      {children}

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
        }

        .pink h1 {
          color: white;
          padding-top: 0;
        }

        .grey {
          background: var(--mainGrey);
        }

        .grey h1 {
          padding-top: 0;
        }

        .highlight {
          text-align: center;
        }
      `}</style>
    </section>
  )
}
