import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    date: '15 February 2022',
    image: '/newblogs/001.png',
  },
  {
    title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    date: '15 February 2022',
    image: '/newblogs/002.png',
  },
  {
    title: 'Curabitur rutrum velit ac congue malesuada',
    date: '15 February 2022',
    image: '/newblogs/003.png',
  },
]

export default function BlogPosts() {
  return (
<section className="max-w-[1929px] mx-auto py-16 px-6 bg-[#0D0D0D]">
    <div className="w-[1329px] mx-auto">
    <h2 className="text-[#ff9F0D] font-greatvibes text-center text-2xl leading-10 mb-2">Blog Post</h2>
    <h1 className="text-5xl font-bold text-center text-[#ff9F0D] leading-[56px] mb-8">La<span className='text-white'>test News & Blog</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 border-2 border-white overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-[423px] h-[349px]" />
            <div className="p-6">
              <p className="font-inter text-[#ff9F0D] text-base font-normal mb-4">{post.date}</p>
              <h3 className="font-bold text-2xl text-white mb-8">{post.title}</h3>
              <div className='flex justify-between'>
              <Link href="/" className="font-inter text-white text-base hover:underline">
                Learn More 
              </Link>
              <span><Image src="/newblogs/icon.png" alt="icon" width={50} height={50} className='w-16'></Image></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

