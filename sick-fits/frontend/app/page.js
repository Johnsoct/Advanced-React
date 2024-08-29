import Header from '../components/Header'

export default function Page({ props, children }) {
  return (
    <div>
      <h2>_app level component</h2>
      {children}
    </div>
  )
}
