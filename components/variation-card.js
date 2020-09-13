import Link from 'next/link'

export default function VariationCard({ variation }) {
  const fullName = variation.asana.name + ' - ' + variation.title
  return (
    <Link href={`/asana/${variation.asana.slug}/${variation.slug}`}>
      <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
        <div className="flex overflow-hidden flex-col rounded m-2 border-2 border-gray-300 bg-gray-200">
          <img
            className="w-full mb-2"
            src={`/variations/${variation.id}.png`}
            alt={fullName}
          />
          <div className="px-4 py-2">
            <p className="m-0 text-xs font-semibold text-gray-700">
              {variation.asana.name}
            </p>
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              {variation.title}
            </p>
            <p className="text-sm mb-1 text-gray-700">{variation.tagline}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
