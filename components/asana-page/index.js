import { useLogged } from 'lib/session'

import ContentSection from 'components/content-section'
import Layout from 'components/layout'
import MainContent from 'components/main-content'

import CardContent from './card-content'
import HealthSection from './health-section'
import KramaSection from './krama-section'
import TeacherSection from './teacher-section'
import Information from './information'
import VariationsFromTag from './variations-from-tag'

export default function AsanaPage({ asana }) {
  const isLogged = useLogged()
  return (
    <Layout
      title={
        asana.alternateNames ? (
          <span>
            {asana.name}
            <span className="text-lg text-gray-600">
              {' '}
              - {asana.alternateNames.join(', ')}
            </span>
          </span>
        ) : (
          asana.name
        )
      }
      subtitle={
        <span className="ml-3 text-lg text-gray-600">
          <span className="text-sm mr-2">/</span>
          {asana.translation}
          <span className="text-sm ml-2">/</span>
        </span>
      }
    >
      <div className="content">
        <MainContent
          asana={asana}
          videos={asana.videos}
          cardContent={<CardContent {...asana} />}
        >
          {asana.content?.body && (
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: asana.content.body }}
            />
          )}
          <Information asana={asana} />
        </MainContent>
        {isLogged && (
          <ContentSection>
            <VariationsFromTag
              variations={asana.variations}
              tag={17}
              title="Variações didáticas"
            />
          </ContentSection>
        )}
        <HealthSection asana={asana} isLogged={isLogged} />
        {isLogged && <KramaSection asana={asana} />}
        {isLogged && <TeacherSection asana={asana} />}
        {asana.curiosities?.body && (
          <ContentSection>
            <h2>Curiosidades</h2>
            <div
              key="curiosities"
              className="max-w-screen-md"
              dangerouslySetInnerHTML={{ __html: asana.curiosities.body }}
            />
          </ContentSection>
        )}
      </div>
    </Layout>
  )
}
