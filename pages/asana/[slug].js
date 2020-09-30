import api from 'lib/api'

import { useLogged } from 'lib/session'

import ContentSection from 'components/content-section'
import Layout from 'components/layout'
import MainContent from 'components/main-content'

import CardContent from 'components/asana-page/card-content'
import HealthSection from 'components/asana-page/health-section'
import KramaSection from 'components/asana-page/krama-section'
import TeacherSection from 'components/asana-page/teacher-section'
import Information from 'components/asana-page/information'
import VariationsFromTag from 'components/asana-page/variations-from-tag'

export default function AsanaPage({ asana }) {
  const isLogged = useLogged()
  return (
    <Layout
      title={
        asana.alternative_names ? (
          <span>
            {asana.name}
            <span className="text-lg text-gray-600">
              {' '}
              - {asana.alternative_names}
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
          {asana.content && (
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: asana.content }}
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
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const asanas = await api.fetch('asanas')
  const slugs = asanas.map((a) => a.slug)
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const asana = await api.fetch('asanas', slug)
  return {
    props: { asana },
    revalidate: 10,
  }
}
