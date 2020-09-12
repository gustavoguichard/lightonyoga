import Layout from 'components/layout'

export default function VariationPage({ variation }) {
  return (
    <Layout
      title={variation.asana.name}
      subtitle={`Variação - ${variation.title}`}
    >
      <div className="md:flex justify-between items-start">
        <div className="md:order-2 md:w-5/12 block bg-gray-200 border-gray-300 border-2 py-2 px-3">
          <img
            className="max-w-full border-2 border-gray-500"
            src="/trikonasana.png"
            alt="Trikonasana"
          />
        </div>
        <main className="md:w-7/12 md:mr-8">
          <p className="text-xl">{variation.tagline}</p>
          <h3>Instruções</h3>
          <div dangerouslySetInnerHTML={{ __html: variation.description }} />
        </main>
      </div>
    </Layout>
  )
}
