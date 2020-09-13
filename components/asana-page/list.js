export default function List({ items, title }) {
  if (!items?.length) return null

  return (
    <div>
      <h3>{title}</h3>
      <ul className="list-disc">
        {items.map((item, i) => (
          <li key={`item-${title}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
