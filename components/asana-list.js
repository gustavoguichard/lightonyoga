import Link from 'next/link'
import kebabCase from 'lodash/kebabCase'

export default function AsanaList({ asanas }) {
  return (
    <div className="md:w-5/12">
      <h3>Asanas</h3>
      <ul className="list-disc">
        {asanas.map((asana) => (
          <li key={asana.name}>
            <Link href="/asana/[slug]" as={`/asana/${kebabCase(asana.name)}`}>
              <a>{asana.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
