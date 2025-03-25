import { Home } from 'lucide-react'
import { SidebarComponent } from './stories/Sidebar/Sidebar'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <SidebarComponent
        items={[
          {
            icon: Home,
            title: 'Home',
            url: '/login'
          },
          {
            title: 'Log In',
            url: '/login'
          },
          {
            title: 'Signup',
            url: '/signup'
          }
        ]}

        name="Atelier Co."
        logo={viteLogo}
      >
      Sidebar content
    </SidebarComponent >
    </>
  )
}

export default App
