import isArray from 'lodash/isArray'

export default function Actions({ name, big, actions }) {
  if (!actions) return null

  return (
    <>
      {big ? <h3>{name}</h3> : <h4>{name}</h4>}
      {isArray(actions) ? (
        <ul className="list-disc">
          {actions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: actions }} />
      )}
    </>
  )
}
