import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-DRD2D8ZVS0"
      />
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`,
        }}
      />
    </>
  )
}
