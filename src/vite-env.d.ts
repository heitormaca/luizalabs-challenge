/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_KEY: string
  readonly VITE_PRIVATE_KEY: string
  readonly VITE_MARVEL_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
