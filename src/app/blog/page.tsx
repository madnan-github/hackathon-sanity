import Blog from '@/components/blogPage/blog'
import React from 'react'
import { TopHeader } from '@/components/headers/topHeader';
import { PHeader } from '@/components/headers/t2';
import { Container } from '@/components/container'
export default function BlogPage() {
  return (
    <>
    <Container>
 {/* import header */}
      <TopHeader />
      <PHeader title='Blog List' />
       {/* import header end*/}
    <Blog />
    
    </Container>
    </>
  )
}
