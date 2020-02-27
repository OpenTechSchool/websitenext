import { NextPage } from 'next'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Guides: NextPage = () => {
  const { t, locale } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('guides.siteTitle')}
      siteDescription={t('guides.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title='Guides'>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
          <Grid item xs={12} md={5}>
            <p>
              We are happy to hear that you would like to get involved in the
              OTS community.
            </p>
            <p>
              This page offers guides around how to start OpenTechSchool in your
              city, organizing events or volunteering as a coach.
            </p>
            <p>Jump right to it:</p>
            <br />
            <Link
              href={`/[lang]/guides#start-chapter`}
              as={`/${locale}/guides#start-chapter`}
            >
              How to start OpenTechSchool in my city
            </Link>
            <br />
            <Link
              href={`/[lang]/guides#organize-meetup`}
              as={`/${locale}/guides#organize-meetup`}
            >
              How to organize a co-learning meetup
            </Link>
            <br />
            <Link
              href={`/[lang]/guides#coaching-guidelines`}
              as={`/${locale}/guides#coaching-guidelines`}
            >
              How to coach at a co-learning meetup
            </Link>
            <Link
              href={`/[lang]/guides#request-event`}
              as={`/${locale}/guides#request-event`}
            >
              How to request a meetup or workshop
            </Link>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' anchor='start-chapter'>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h2>How to start OpenTechSchool in my city</h2>
            <p>
              We won’t lie to you: starting something is always hard. This might
              not only be hard, but also very frustrating at times. This guide
              is here for you. You can also contact us when you get stuck and
              we’ll see how we can help you.
            </p>
            <br />
            <h2>Teaming up</h2>
            <p>Get a team together. Make sure you have people that are:</p>
            <br />
            <ul>
              <li>excited about organizing tech events</li>
              <li>
                already organizing (or organized) some tech events (e.g.
                meetups, usergroups)
              </li>
              <li>
                know how to code and is enthusiast about coaching at a beginner
                level
              </li>
            </ul>
            <br />
            <p>
              Something very helpful in getting people to get in touch with each
              other. OTS can help you out! We already have a Slack where you can
              get connected.
            </p>
            <br />
            <p>
              Social networks are a great tool to promote your events and get in
              touch with more tech enthusiasts every day. OTS has its own
              (global) Facebook and Twitter profiles and in addition to this,
              we’ll provide a localized OTS Twitter account for your city.
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' anchor='organize-meetup'>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h2>Organize an co-learning meetup</h2>
            <p>
              A co-learning meetup is an event aimed at everyone who’s learning
              to code, develop software, or anything tech-related. This includes
              both absolute beginners as well as developers who want to acquire
              new tech skills and get into passionate conversations about it.
              After all: lifelong, we are all learners!
            </p>
            <br />
            <p>
              The other purpose of this event is to help build a community
              around OTS and keep its members engaged, offering a regular event
              as reference meeting point for learners who want to ask questions
              or present their latest projects, coaches willing to offer their
              skills by joining the event’s discussions, and anyone interested
              in participating in a skill exchange.
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
        <br />
        <p>
          Make sure the event and its idea is in agreement with our{' '}
          <Link
            href={`/[lang]/about#core-values`}
            as={`/${locale}/about#core-values`}
          >
            <a>values</a>
          </Link>
          . In particular:
        </p>
        <br />
        <ul>
          <li>
            even though your event may be targeting a certain group of people,
            it needs to be as open and inclusive as possible
          </li>
          <li>
            you have to make sure that the event is enjoyable/accessible at a
            beginner’s level
          </li>
          <li>
            always remember that the Co-learning Meetup ought to give beginners
            the chance to learn, (hopefully) get answers to their questions, and
            present what they have created or discovered
          </li>
          <li>
            you are responsible for creating a welcoming learning environment,
            where learners are encouraged to ask questions and nothing is
            assumed to be “self-explanatory.” State this explicitly at the
            beginning of the meetup, to embolden the shy people and so everyone
            attending can help you create this environment.
          </li>
        </ul>
      </TextSection>

      <TextSection>
        <h2>Planning the meetup</h2>
        <h3>Find co-organizers.</h3>
        <p>Always more fun to not do it alone</p>
        <h3>Find a venue.</h3>
        <p>
          We suggest trying to get in contact with coworking spaces, hacker
          spaces, and start-ups that might want to offer their office for an OTS
          event. Any space that would make a good fit with the OTS network and
          spirit
        </p>
        <h3>Find a date.</h3>
        <p>
          We suggest picking a weeknight (optimally, Tuesday - Friday), starting
          no later than 19:30 and going on no longer than two hours (break
          included). Ideally, you would already plan to have the meetup monthly,
          but this is not mandatory.
        </p>
        <h3>Find attendees.</h3>
        <p>
          Find attendees. We can help! If it doesn’t already exist, we will set
          up an OTS Meetup account for your city (e.g.
          meetup.com/opentechschool-yourcity) and you’ll be able to use it to
          communicate about the meetup and have people join the event.
          Furthermore, we’ll promote the event page through our social media
          channels, mailing lists, user groups, and communities. Of course we
          also need you to spread the word and get people to join! A couple of
          days before the event, write all the attendees a reminder e-mail
          asking them to update their RSVP status (if they are unable to join,
          by changing their RSVP to “not coming,” there will be seats freed for
          people who might be on the waiting list).
        </p>
      </TextSection>

      <TextSection>
        <h2>At the meetup</h2>
        <p>
          Be sure to get to the venue at least one hour in advance and with at
          least another co-organizer, in order to set up the space and the
          projector, put signs up outside, as well as meet the speakers in
          advance.
        </p>
        <p>
          Have a member of the OTS team moderate the event. When everybody is
          sitting, they should do a quick introduction covering:
        </p>
        <br />
        <ul>
          <li>what is OTS?</li>
          <li>what is the Learners Meetup?</li>
          <li>
            explain that the event is meant to be especially welcoming for
            beginners
          </li>
          <li>the meetup’s format and timetable</li>
          <li>point out the other organizers and coaches</li>
          <li>point out projects</li>
        </ul>
      </TextSection>

      <TextSection
        classname='grey'
        title='Coaching guidelines'
        anchor='coaching-guidelines'
      >
        <p>
          You are about to help out at an OpenTechSchool workshop as a coach. We
          want to give you a quick introduction of what that means. The focus
          for the event is to show learners that coding and tech is nothing to
          be afraid of, but rather a lot of fun!
        </p>
        <h3>{"Coaching isn't teaching"}</h3>
        <p>
          Instead of standing infront to teach something, coaches are right
          there when needed, encourage learners and ensure they having fun doing
          it.
        </p>
        <h3>Creating a friendly environment</h3>
        <p>
          Smile, make eye contact, be kind and friendly. Look around to see if
          someone else might be having trouble. Come by once in a while and ask
          if you can help.
        </p>
        <h3>Questions are good</h3>
        <p>
          Get people comfortable asking questions. Give other learners the
          chance to answer. Respond to questions positively.
        </p>
        <h3>{"Dont's"}</h3>
        <p>
          {
            "We don't roll our eyes or laugh at questions. We do not debate which programming language, methods or technologies are better."
          }
        </p>
        <br />
        <p>
          Read the full guidelines:
          http://opentechschool.github.io/slides/presentations/coaching/
        </p>
      </TextSection>

      <TextSection title='Requesting an event' anchor='request-event'>
        <h2>Do you also offer.. ?</h2>
        <p>
          Do you have an idea for a new meetup or workshop but can&apos;t
          organize it by your self? <br />
          Or perhaps you really want to learn that specific technology but
          don&apos;t see any event close to you and don&apos;t manage to
          organize an event? <br />
          Join our Slack channel and get in contact with us. <br />
          Maybe we can make your dream come true!
        </p>
        <h3>{'How to join us on Slack'}</h3>
        <p>
          You can join us on our
          <a href='https://opentechschool-slack.herokuapp.com/'>
            {' '}
            general channel{' '}
          </a>
          <br />
          Feel free to search through our Slack channels to find if the OTS
          chapter closer to you has a specific slack channel.
        </p>
      </TextSection>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .placeholder {
          background: var(--pink);
          min-height: 300px;
          width: 100%;
          margin: 40px 0;
        }

        ul {
          list-style: inherit;
          margin-left: 25px;
        }

        li {
          padding-left: 5px;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Guides)
