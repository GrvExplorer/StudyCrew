'use client'

import React from 'react'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Logout(props: { placement: string }): JSX.Element {
  const router = useRouter()
  return (
    <SignedIn>
      <SignOutButton
        signOutCallback={() => {
          router.push('/sign-in')
        }}
      >
        <div
          className={`flex cursor-pointer gap-4 ${
            props.placement === 'top' && 'lg:hidden'
          }`}
        >
          <p className="text-light-2 max-lg:hidden">Logout</p>
        </div>
      </SignOutButton>
    </SignedIn>
  )
}
