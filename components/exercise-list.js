import Card from 'components/card'

export default function ExerciseList({ exercises }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        {exercises.length ? (
          exercises.map((pose) => (
            <ExerciseCard key={pose.slug} {...pose} />
          ))
        ) : (
          <p>Nada encontrado</p>
        )}
      </div>
    </div>
  )
}

const ExerciseCard = ({ full_name, slug, parent_slug, picture, comment }) => {
  const [title, subtitle] = full_name.split(' - ')
  return <Card
    pose={{ picture }}
    slug={parent_slug ? `${parent_slug}/${slug}` : slug}
    href={parent_slug ? "/asana/[slug]/[variationSlug]" : undefined}
    title={title}
    subtitle={subtitle}
    tagline={comment}
  />
}
