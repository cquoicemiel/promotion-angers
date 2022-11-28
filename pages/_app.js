import '../styles/globals.css'

function SafeHydrate({ children }) {
  return (
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : children}
      </div>
  )
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
