import FlyoutMenu, { NavigationMenuDemo } from '@/components/NavigatinMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { ThemeComponent } from '@/components/theme/ThemeComponent';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <div>
      <header
        className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("../assets/bg.jpg")' }}
      >
        <div>
          <div className="  items-center py-6 px-2 container mx-auto">
            <div className="flex justify-between items-center">
              <Image
                src="/assets/logo.svg"
                width={100}
                height={100}
                alt="no image "
              />

              <div className="flex gap-x-10 font-medium text-md uppercase items-center">
                <p>HomePage</p>
                <p>Features</p>
                <FlyoutMenu />
                <p>How It Works</p>
                <p>Services</p>
                <p>Blog</p>
              </div>
              <div>
                <ThemeComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[130px]">
          <div className="flex justify-center items-center ">
            <div className="space-y-4 w-1/2">
              <p className="font-medium text-xl tracking-wide ">
                {' '}
                Custom Software Development
              </p>
              <div className="font-bold text-5xl  text-gray-500 tracking-wide space-y-4">
                <p>specialize in providing</p>
                <p>custom software</p>
                <p>solutions unique needs</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
              <div className="flex gap-x-10 items-center">
                <button className="bg-[#0466C8] rounded-md p-3 text-white">
                  GET STARTED
                </button>
                <p className="uppercase font-medium">see project</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        <AboutUs />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, hic
        quisquam consectetur laboriosam omnis dolore voluptatem necessitatibus
        modi facere? Ullam dolorum repellendus facere perferendis voluptatibus
        vero minima nam excepturi, aut explicabo, a dolores, nesciunt cupiditate
        eligendi molestias accusamus commodi laboriosam ab quae soluta
        architecto quasi saepe. Reprehenderit molestiae, quod quasi repellendus
        eveniet deserunt possimus? Obcaecati, debitis totam. Repellat alias
        aspernatur eveniet nesciunt cupiditate cum a, hic qui? Tenetur vitae
        consequatur facere, sint tempore, hic expedita ducimus in nobis maiores
        totam deleniti ratione enim minus itaque dignissimos. Distinctio quod
        aspernatur modi architecto perferendis et tempore a vitae cumque, rerum
        repellendus beatae asperiores aliquid delectus eveniet totam, quae
        minima perspiciatis velit similique eaque blanditiis ad sed! Eligendi
        eos odio at praesentium obcaecati? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ex expedita, non error aperiam quas quidem
        quam impedit unde voluptatem obcaecati perspiciatis libero enim quia
        assumenda! Nisi pariatur facilis qui ullam nihil similique, at corporis
        eum? Iure atque blanditiis a? Nam sit nemo voluptates quibusdam
        consequuntur debitis alias, assumenda deleniti deserunt neque aperiam
        quia. Nisi aperiam reiciendis dolor sequi quis similique quas
        consequatur voluptates voluptatibus, facilis facere! Debitis soluta
        laborum quam, aliquam, culpa vero rerum dolores totam eaque blanditiis
        quae quaerat omnis repellendus sunt corrupti cum quod. Ad quam nihil
        excepturi quidem magni labore rem dolor laborum officia. Amet, expedita!
        Repellendus!
      </main>
    </div>
  );
}
