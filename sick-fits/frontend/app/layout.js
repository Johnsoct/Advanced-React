//Packages
// Components
import Header from '../components/Header'
import StyledComponentsRegistry from '../lib/registry'

export const metadata = {
  title: 'Sick Fits',
  description: 'The sickest place to find your fits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
        </Header>
        {/* <StyledComponentsRegistry> */}
          {children}
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  )
}
