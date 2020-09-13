export default function PostureMainContent({
  children,
  cardContent,
  videos,
  picture = '/trikonasana.png',
}) {
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="md:order-2 md:w-5/12 mb-3 block bg-gray-200 border-gray-300 border-2 rounded overflow-hidden">
          <img
            className="max-w-full m-0 border-2 border-gray-500"
            src={picture}
            alt="Trikonasana"
          />
          {cardContent}
        </div>
        <main className="md:w-7/12 md:mr-8">{children}</main>
      </div>
      {!!videos?.length && (
        <div>
          <hr />
          <h2>Vídeos</h2>
          <div className="flex flex-wrap">
            {videos.map((video) => (
              <Video key={video} id={video} />
            ))}
          </div>
        </div>
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
