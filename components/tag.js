import Link from 'next/link'

export default function Tag({ tag }) {
  return (
    <Link href="/tag/[slug]" as={`/tag/${tag.slug}`}>
      <a className="p-1 text-xs mr-1 font-semibold text-blue-800 bg-blue-200 rounded">
        {tag.name}
      </a>
    </Link>
  )
}
