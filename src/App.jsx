
import { ThemeProvider } from "@/components/ui/theme-provider"
import '@/styles/main.scss'
import Index from "@/components/theme/dashboard/Index"
const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Index />
    </ThemeProvider>
    </>
  )
}

export default App
