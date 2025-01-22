
import { PHeader } from '@/components/headers/t2'
import { TopHeader } from '@/components/headers/topHeader'
import OurChefs from '@/components/OurChefs/ourChefs'
import React from 'react'

export default function ChefPage() {
  return (
    <div>
       {/* import header */}
                <TopHeader />
                <PHeader title='Our Chef'/>
                 {/* import header end*/}
                <OurChefs />
    </div>
  )
}
