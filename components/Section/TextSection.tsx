interface TextSectionProps {
  classname?: string
  title?: string
  children: any
}

export default function TextSection({
  classname,
  title,
  children,
}: TextSectionProps) {
  return (
    <section className={classname}>
      <div className='content-wrapper'>
        <h1>{title}</h1>
        {children}
      </div>
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
          padding: 40px 50px;
        }

        .pink h1 {
          color: white;
          padding-top: 0;
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
      `}</style>
    </section>
  )
}
