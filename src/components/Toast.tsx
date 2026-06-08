import { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle } from '@phosphor-icons/react'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

interface ToastContextValue {
  show: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

let nextId = 0

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const show = useCallback((message: string, type: ToastType = 'success') => {
    const id = nextId++
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  const remove = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed top-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" role="status" aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => remove(toast.id)}
            className="double-bezel p-[1px] w-[340px] pointer-events-auto cursor-pointer animate-slideDown"
          >
            <div className="double-bezel-inner px-4 py-3.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0" aria-hidden="true">
                <CheckCircle size={16} className="text-accent" weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text text-sm font-medium truncate">{toast.message}</p>
                <p className="text-text-muted text-[11px]">Mensagem enviada com sucesso</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
