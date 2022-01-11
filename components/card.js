import Link from 'next/link'

import { join } from 'lib/utils'

import Img from 'next/image'

export default function Card({ title, slug, subtitle, tagline, pose }) {
  return (
    <Link href={`/asana/${slug}`}>
      <a className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5">
        <div className="flex flex-col w-full my-2 overflow-hidden border-2 border-gray-100 rounded sm:m-2 hover:border-orange-500 bg-gray-50">
          <Img
            className="w-full mb-2 card-img"
            width={288}
            height={200}
            src={pose.picture}
            alt={join([title, subtitle], ' - ')}
          />
          <div className="px-4 py-2">
            <p className="mb-0 text-sm font-semibold leading-tight text-gray-700">
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
              <p className="mt-1 mb-1 text-sm leading-tight text-gray-600">
                {tagline}
              </p>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}
