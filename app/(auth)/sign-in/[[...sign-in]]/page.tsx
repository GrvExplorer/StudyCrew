import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | StudyCrew',
  description: 'Sign in to continue your journey to a better education.'
}

export default function Page(): JSX.Element {
  return <SignIn />
}
