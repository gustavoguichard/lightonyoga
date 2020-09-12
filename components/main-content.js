export default function PostureMainContent({
  children,
  cardContent,
  videos,
  picture = '/trikonasana.png',
}) {
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="md:order-2 md:w-5/12 block bg-gray-200 border-gray-300 border-2 py-2 px-3">
          <img
            className="max-w-full border-2 border-gray-500"
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
  <div className="mr-3">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)
