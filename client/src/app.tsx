import "normalize.css"
import "./styles/global.scss"
import { createContext, useContext, useEffect, useState } from "react"
import { RouterProvider } from "react-router"
import { router } from "./routers"
import { useSettings } from "@/hooks/requests/useGetSettings"
import { Settings } from "./typescript/interfaces"

const Context = createContext<{
  settings: Settings | null
  loading: boolean
  error: any
  refetch: () => Promise<void>
} | null>(null)

export const useContextProvider = () => {
  const context = useContext(Context)
  if (!context) throw new Error("Ошибка использования useContextProvider")
  return context
}

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings | null>(null);

  const { fetchSettings, loading, error } = useSettings({ setSettings: setSettings })

  useEffect(() => {
    fetchSettings();
  }, [])

  return (
    <Context.Provider
      value={{
        settings,
        loading,
        error,
        refetch: fetchSettings,
      }}
    >
      {children}
    </Context.Provider>
  )
}

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App
