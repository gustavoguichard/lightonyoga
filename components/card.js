import Link from 'next/link'

import { join } from 'lib/utils'

import Img from 'components/img'

export default function Card({ title, slug, subtitle, tagline, pose }) {
  return (
    <Link href={`/asana/${slug}`}>
      <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 flex">
        <div className="flex w-full overflow-hidden flex-col rounded my-2 sm:m-2 border-2 border-gray-100 hover:border-orange-500 bg-gray-50">
          <Img
            className="w-full mb-2 card-img"
            src={pose.picture}
            alt={join([title, subtitle], ' - ')}
          />
          <div className="px-4 py-2">
            <p className="text-sm font-semibold text-gray-700 leading-tight mb-0">
              {subtitle ? (
                <span>
                  <em className="text-gray-500">{title}: </em>
                  {subtitle}
                </span>
              ) : (
                title
              )}
            </p>
            {tagline && (
              <p className="text-sm mb-1 leading-tight mt-1 text-gray-600">
                {tagline}
              </p>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}
