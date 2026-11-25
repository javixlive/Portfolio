'use client'

import dynamic from 'next/dynamic'
import { ModelContainer, ModelSpinner } from './model-frame'

const LizardModel = dynamic(() => import('./lizard-model'), {
  ssr: false,
  loading: () => (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  )
})

export default function ModelHeader() {
  return <LizardModel />
}
