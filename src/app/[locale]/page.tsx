// import { Hero } from '@/widgets/hero/hero'
// import { Features } from '@/widgets/features/features'

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/features/hero/hero'));
// const Features = dynamic(() => import('@/widgets/features/features'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <section id="contact" className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Let’s talk</h2>
        </div>
      </section>
    </>
  )
}

// import dynamic from 'next/dynamic';

// const Hero = dynamic(() => import('@/features/hero/hero'), { ssr: false });

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       {/*  другие секции  */}
//     </>
//   );
// }