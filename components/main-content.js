import Img from 'next/image'
import KramaList from 'components/krama-list'

export default function PostureMainContent({
  children,
  cardContent,
  asana,
  isVariation,
}) {
  return (
    <div>
      <div className="items-start justify-between md:flex">
        <div className="block mb-3 overflow-hidden border border-gray-200 rounded md:order-2 md:w-5/12 bg-gray-50">
          <Img
            className="max-w-full m-0"
            width={500}
            height={400}
            src={asana?.picture}
            alt={
              isVariation
                ? `${asana?.asana?.name}: ${asana?.name}`
                : asana?.name
            }
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
    </div>
  )
}
