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

export default function AsanaPage({ asana, family, movements, sanscritWords }) {
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
          {asana.meaning}
          <span className="text-sm ml-2">/</span>
        </span>
      }
    >
      <MainContent
        videos={asana.videos}
        picture={`/${asana.slug}.png`}
        cardContent={
          <CardContent
            sanscritWords={sanscritWords}
            movements={movements}
            family={family}
          />
        }
      >
        {asana.introduction && <p className="text-xl">{asana.introduction}</p>}
        <Information asana={asana} />
      </MainContent>
      {isLogged && (
        <ContentSection>
          <VariationsFromTag
            asanaId={asana.id}
            tag={18}
            title="Variações didáticas"
          />
        </ContentSection>
      )}
      <HealthSection asana={asana} isLogged={isLogged} />
      {isLogged && <KramaSection asana={asana} />}
      {isLogged && <TeacherSection asana={asana} />}
      {asana.curiosities && (
        <ContentSection>
          <h2>Curiosidades</h2>
          <div
            key="curiosities"
            className="max-w-screen-md"
            dangerouslySetInnerHTML={{ __html: asana.curiosities }}
          />
        </ContentSection>
      )}
    </Layout>
  )
}
