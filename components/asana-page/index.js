import ContentSection from 'components/content-section'
import Layout from 'components/layout'
import MainContent from 'components/main-content'

import CardContent from './card-content'
import HealthSection from './health-section'
import Information from './information'

export default function AsanaPage({
  asana,
  variations,
  family,
  movements,
  sanscritWords,
}) {
  return (
    <Layout
      title={asana.name}
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
      <HealthSection asana={asana} />
      {asana.curiosities && (
        <ContentSection>
          <h2>Curiosidades</h2>
          <div
            className="max-w-screen-md"
            dangerouslySetInnerHTML={{ __html: asana.curiosities }}
          />
        </ContentSection>
      )}
    </Layout>
  )
}
