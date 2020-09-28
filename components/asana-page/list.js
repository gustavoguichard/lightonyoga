export default function List({ items, title }) {
  if (!items) return null

  const itemsArray = items.split('\n')
  return (
    <div>
      <h3>{title}</h3>
      <ul className="list-disc">
        {itemsArray.map((item, i) => (
          <li key={`item-${title}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
