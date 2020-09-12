import Link from 'next/link'

export default function VariationCard({ asana, variation }) {
  const fullName = asana.name + ' - ' + variation.title
  return (
    <Link href={`/asana/${asana.slug}/${variation.slug}`}>
      <a>
        <div className="flex max-w-lg p-3 m-2 border-2 border-gray-300 bg-gray-200">
          <img
            className="w-32 mr-4 mb-0"
            src="/trikonasana.png"
            alt={fullName}
          />
          <div>
            <h6 className="text-md pt-0 leading-snug">{fullName}</h6>
            <p className="text-xs">{variation.tagline}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
