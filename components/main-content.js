import ContentSection from 'components/content-section'
import KramaList from 'components/krama-list'

export default function PostureMainContent({
  children,
  cardContent,
  videos,
  asana,
}) {
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="md:order-2 md:w-5/12 mb-3 block bg-gray-200 border-gray-300 border-2 rounded overflow-hidden">
          <img
            className="max-w-full m-0"
            src={asana?.image}
            alt={asana?.name}
          />
          {cardContent}
        </div>
        <main className="md:w-7/12 md:mr-8">{children}</main>
      </div>
      <KramaList
        asana={asana}
        title="Posturas alternativas"
        subtitle={`Essas posturas podem ser feitas caso haja algum impedimento ou contra-indicação para praticar ${asana.name}.`}
        kind="alternative"
      />
      {!!videos?.length && (
        <ContentSection>
          <h2>Vídeos</h2>
          <div className="flex flex-wrap">
            {videos.map((video) => (
              <Video key={video} id={video} />
            ))}
          </div>
        </ContentSection>
      )}
    </div>
  )
}

const Video = ({ id }) => (
  <div className="w-full sm:w-1/2 md:w-1/3">
    <div className="mr-3 mb-3 embed-responsive aspect-ratio-4/3">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
)
