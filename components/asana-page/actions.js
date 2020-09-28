import isObject from 'lodash/isObject'

export default function Actions({ name, big, actions }) {
  const isRichContent = isObject(actions)
  if (!actions || (isRichContent && !actions?.body)) return null

  return (
    <>
      {big ? <h3>{name}</h3> : <h4>{name}</h4>}
      {isRichContent ? (
        <div dangerouslySetInnerHTML={{ __html: actions.body }} />
      ) : (
        <ul className="list-disc">
          {actions.split('\n').map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      )}
    </>
  )
}
