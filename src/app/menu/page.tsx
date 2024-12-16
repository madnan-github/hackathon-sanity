import { PHeader } from '@/components/header/t2'
import { TopHeader } from '@/components/header/topHeader'
import MainMenu from '@/components/ourMenu/mainMenu'
import React from 'react'

export default function Menu() {
  return (
    <>
    <TopHeader />
    <PHeader title='Our Menu'/>  
    <MainMenu />
    
    
    </>
  )
}
