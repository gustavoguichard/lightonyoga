import api from 'lib/api'

import Layout from 'components/layout'
import MainSearch from 'components/main-search'

export default function Home({ asanas, tags }) {
  return (
    <Layout>
      <div className="md:flex mt-4 md:mt-8 flex-col items-center">
        <MainSearch asanas={asanas} tags={tags} />
        <main className="md:w-7/12 md:ml-8">
          <h1 className="text-center mb-6">Manifesto</h1>
          <p className="text-center">
            Quando perguntaram ao Guruji o porquê dele não registrar patente dos
            props ele disse:
          </p>
          <blockquote>
            Eu desenvolvi os props para que as pessoas possam se beneficiar.
            Milhares estão se beneficiando e continuarão se beneficiando deles.
            Deus alguma vez registrou uma patente para sua criação? Então que
            direito eu, um mero mortal, tenho para fazer isso?
          </blockquote>
          <p className="text-center">
            Também sabemos que Geetaji um dia falou:
          </p>
          <blockquote>
            A afirmação de Guruji 'dar não nos empobrece, reter não nos
            enriquece' não apenas deve ser compreendida por nós, mas também
            praticada.
          </blockquote>
          <p>
            Com isso em mente, resolvemos fazer esta plataforma que tem o
            objetivo de ser um material complementar de estudos, também como uma
            forma de democratizar o conhecimento do método.
          </p>
          <p>
            Como estudantes, praticantes e/ou professores do método{' '}
            <em>Iyengar</em>, temos muitas anotações de cursos, aulas, workshops
            e de nossas práticas pessoais. Para ter a possibilidade de pesquisar
            esse material rapidamente, resolvemos desenvolver uma ferramenta que
            nos ajude.
          </p>
          <p>
            Também queremos que esse conhecimento acessível e compartilhável, o
            que tende a ajudar na evolução do método sob uma perspectiva
            científica. Guruji encarava o Yoga como uma ciência em constante
            desenvolvimento:
          </p>
          <blockquote>Que meu fim seja o seu começo</blockquote>
          <p>
            <strong>Importante:</strong> O conteúdo descrito nesta plataforma
            deve ser usado como material de apoio. Ele não substitui a
            orientação profissional e/ou as aulas presenciais. Também não
            pretende ser tomado como correto já que é altamente embasado em
            nossas próprias práticas pessoais.
          </p>
          <p className="text-lg text-center">Namastê</p>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.listAsanas()
  const tags = await api.listTags()
  return {
    props: { asanas, tags },
  }
}
