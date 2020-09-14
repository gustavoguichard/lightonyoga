import Link from 'next/link'

export default function CategoryLink({ name, prefix, id }) {
  return (
    <Link href={`/${prefix}/[slug]`} as={`/${prefix}/${id}`}>
      <a className="mr-2">{name};</a>
    </Link>
  )
}
