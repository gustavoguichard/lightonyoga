import Layout from 'components/layout'
import MainContent from 'components/main-content'

export default function VariationPage({ variation }) {
  return (
    <Layout
      title={variation.asana.name}
      subtitle={`Variação - ${variation.title}`}
    >
      <MainContent videos={variation.videos}>
        <p className="text-xl">{variation.tagline}</p>
        <div className="-mt-2 mb-2">
          {variation.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3>Instruções</h3>
        <div dangerouslySetInnerHTML={{ __html: variation.description }} />
      </MainContent>
    </Layout>
  )
}

const Tag = ({ children }) => (
  <span className="p-1 text-xs mr-1 font-semibold text-blue-800 bg-blue-200 rounded">
    {children}
  </span>
)
