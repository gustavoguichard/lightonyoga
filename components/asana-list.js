import Link from 'next/link'

export default function AsanaList({ asanas }) {
  return (
    <div className="md:w-5/12">
      <h3>Asanas</h3>
      <ul className="list-disc">
        {asanas.map((asana) => (
          <li key={asana.name}>
            <Link href="/asana/[slug]" as={`/asana/${asana.slug}`}>
              <a>{asana.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
