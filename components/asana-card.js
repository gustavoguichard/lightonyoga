import Link from 'next/link'

export default function AsanaCard({ title, subtitle, tagline, link, picture }) {
  return (
    <Link href="/asana/[...slug]" as={link}>
      <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
        <div className="flex overflow-hidden flex-col rounded m-2 border-2 border-gray-300 bg-gray-200">
          <img
            className="w-full mb-2"
            src={picture}
            alt={[title, subtitle].join(' - ')}
          />
          <div className="px-4 py-2">
            {subtitle && (
              <p className="m-0 text-xs font-semibold text-gray-700">{title}</p>
            )}
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              {subtitle || title}
            </p>
            {tagline && <p className="text-sm mb-1 text-gray-700">{tagline}</p>}
          </div>
        </div>
      </a>
    </Link>
  )
}
