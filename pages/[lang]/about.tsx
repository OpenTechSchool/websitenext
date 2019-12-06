import PageLayout from '../../components/PageLayout/PageLayout'
import TextSection from '../../components/Section/TextSection'
import useTranslation from '../../hooks/useTranslation'
import withLocale from '../../containers/withLocale'

import { mediaquery } from '../../style/style'

function About() {
  const { locale, t } = useTranslation()

  return (
    <PageLayout siteTitle='About' siteDescription='opentechschool about page'>
      <TextSection classname='default' title='History'>
        <div className='historySection'>
          <h3>{t('bio')}</h3>
          <p>
            OTS was born in April of 2012 in Berlin. The first local RailsGirls
            event — a free tech workshop with freshly created learning materials
            dedicated to an audience of women of all ages and backgrounds during
            a both thrilling and cosy weekend — had just taken place, and had
            created much admiration and enthusiasm in its wake. Why not expand
            the concept to all tech topics people might possibly want to learn
            and open the events to an audience of all genders and experience
            levels? The challenge couldn’t be greater. Since then, hundreds of
            people have joined OTS as coaches, learners, organizers, and
            sponsors, in Berlin, Stockholm, and soon: even in more new cities
            (yours!).
          </p>
          <img src='/about.jpg' />
        </div>
      </TextSection>
      <TextSection classname='pink' title='What is OpenTechSchool?'>
        <p>
          OpenTechSchool is a movement aiming to offer free tech education. Our
          events are open to technology enthusiasts of all genders, backgrounds,
          and experience levels, willing to coach or learn in a friendly
          environment. Our learning materials are shared and collectively
          improved by the online community and anyone is welcome to use it to
          organize new OTS chapters anywhere in the world.
        </p>
      </TextSection>
      <TextSection classname='highlight' title='Core values'>
        <p>OpenTechSchool is best described through our core values.</p>
      </TextSection>
      <TextSection classname='slide' title='Openness'>
        <p>
          All OTS discussions, training materials, and blueprints are openly
          accessible through our website so that anyone can find them and
          contribute to their development. Furthermore, for OTS, openness also
          means sharing: our coaches share their skills and time, and our
          learners share their own knowledge with the community, both by
          presenting their achievements during the beginners meetup and by later
          becoming coaches themselves.
        </p>
      </TextSection>
      <TextSection classname='grey' title='Our Licensing Policy'>
        <p>
          In correspondence with our values we release all learning materials,
          blueprints and any other kind of content under the{` `}
          <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en_US'>
            Creative Commons Attribution-ShareAlike 3.0 Unported License:
          </a>
          {` `}
          As long as you attribute the work to the OpenTechSchool (usually by
          mentioning such and providing the link to the original material) and
          share it under the same licence again, you are free to use, share,
          copy and modify it - even in a commercial context.
        </p>
      </TextSection>
      <style jsx>{`
        .historySection {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .historySection img {
          padding-top: 30px;
        }

        @media (${mediaquery.tabletToDesktop}) {
          .historySection {
            flex-direction: wrap;
          }
        }
      `}</style>
    </PageLayout>
  )
}

export default withLocale(About)
