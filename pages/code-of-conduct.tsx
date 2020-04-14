import { NextPage } from 'next'
import TextSection from '../components/Section/TextSection'
import WithLocale from '../containers/withLocale'
import PageLayout from '../components/PageLayout/PageLayout'

const CodeOfConduct: NextPage = () => {
  return (
    <PageLayout siteTitle='' siteDescription=''>
      <TextSection title='Code of Conduct'>
        <h3 id='purpose'>Purpose</h3>

        <p>
          A primary goal of all events organized or affiliated with the
          OpenTechSchool is to be inclusive to the largest number of
          participants, with the most varied and diverse backgrounds possible.
          As such, we are committed to providing a friendly, safe and welcoming
          environment for all, regardless of gender, sexual orientation,
          ability, ethnicity, socioeconomic status and religion (or lack
          thereof).
        </p>

        <p>
          This Code of Conduct outlines our expectations for all those who
          participate in our community, as well as the consequences for
          unacceptable behavior.
        </p>

        <p>
          We invite all those who participate in our events to help us create
          safe and positive experiences for everyone.
        </p>

        <h3 id='open-sourceculturetech-citizenship'>
          Open [Source/Culture/Tech] Citizenship
        </h3>

        <p>
          A supplemental goal of this Code of Conduct is to increase open
          [source/culture/tech] citizenship by encouraging participants to
          recognize and strengthen the relationships between our actions and
          their effects on our community.
        </p>

        <p>
          Communities mirror the societies in which they exist and positive
          action is essential to counteract the many forms of inequality and
          abuses of power that exist in society.
        </p>

        <p>
          If you see someone who is making an extra effort to ensure our
          community is welcoming, friendly, and encourages all participants to
          contribute to the fullest extent, we want to know.
        </p>

        <h3 id='expected-behavior'>Expected Behavior</h3>

        <ul>
          <li>
            Participate in an authentic and active way. In doing so, you
            contribute to the health and longevity of this community.
          </li>
          <li>
            Exercise consideration and respect in your speech and actions.
          </li>
          <li>Attempt collaboration before conflict.</li>
          <li>
            Refrain from demeaning, discriminatory, or harassing behavior and
            speech.
          </li>
          <li>
            Be mindful of your surroundings and of your fellow participants.
            Alert community leaders if you notice a dangerous situation, someone
            in distress, or violations of this Code of Conduct, even if they
            seem inconsequential.
          </li>
        </ul>

        <h3 id='unacceptable-behavior'>Unacceptable Behavior</h3>

        <p>
          Unacceptable behaviors include: intimidating, harassing, abusive,
          discriminatory, derogatory or demeaning speech or actions by any
          participant in our community online, at all related events and in
          one-on-one communications carried out in the context of community
          business. Community event venues may be shared with members of the
          public; please be respectful to all patrons of these locations.
        </p>

        <p>
          Harassment includes: harmful or prejudicial verbal or written comments
          related to gender, sexual orientation, race, religion, disability;
          inappropriate use of nudity and/or sexual images in public spaces
          (including presentation slides); deliberate intimidation, stalking or
          following; harassing photography or recording; sustained disruption of
          talks or other events; inappropriate physical contact, and unwelcome
          sexual attention.
        </p>

        <h3 id='consequences-of-unacceptable-behavior'>
          Consequences of Unacceptable Behavior
        </h3>

        <p>
          Unacceptable behavior from any community member, including sponsors
          and those with decision-making authority, will not be tolerated.
          Anyone asked to stop unacceptable behavior is expected to comply
          immediately.
        </p>

        <p>
          If a community member engages in unacceptable behavior, the community
          organizers may take any action they deem appropriate, up to and
          including a temporary ban or permanent expulsion from the community
          without warning (and without refund in the case of a paid event).
        </p>

        <h3 id='if-you-witness-or-are-subject-to-unacceptable-behavior'>
          If You Witness or Are Subject to Unacceptable Behavior
        </h3>

        <p>
          If you are subject to or witness unacceptable behavior, or have any
          other concerns, please notify a community organizer as soon as
          possible. You can find a list of organizers to contact for each of the
          supporters of this code of conduct at the bottom of this page.
          Additionally, community organizers are available to help community
          members engage with local law enforcement or to otherwise help those
          experiencing unacceptable behavior feel safe. In the context of
          in-person events, organizers will also provide escorts as desired by
          the person experiencing distress.
        </p>

        <h3 id='addressing-grievances'>Addressing Grievances</h3>

        <p>
          If you feel you have been falsely or unfairly accused of violating
          this Code of Conduct, you should notify one of the event organizers
          with a concise description of your grievance. Your grievance will be
          handled in accordance with our existing governing policies.
        </p>

        <h3 id='scope'>Scope</h3>

        <p>
          We expect all community participants (contributors, paid or otherwise;
          sponsors; and other guests) to abide by this Code of Conduct in all
          community venues—online and in-person—as well as in all one-on-one
          communications pertaining to community business.
        </p>

        <h3 id='license-and-attribution'>License and attribution</h3>

        <p>
          This Code of Conduct is based on the{' '}
          <a
            href='https://berlincodeofconduct.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Berlin Code of Conduct
          </a>
          . Both are distributed under the{' '}
          <a
            href='https://creativecommons.org/licenses/by-sa/3.0/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Creative Commons Attribution-ShareAlike license in its latest
            version
          </a>
          .
        </p>
      </TextSection>
    </PageLayout>
  )
}

export default WithLocale(CodeOfConduct)
