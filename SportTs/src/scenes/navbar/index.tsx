import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link';
import { SelectedPage } from '@/shared/types';



type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBeetween = 'flex items-center justify-between'

  return (
    <nav>
      <div className={`${flexBeetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBeetween} mx-auto w-5/6 `}>
          <div className={`${flexBeetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt='logo' src={Logo} />
            {/* Right side */}
            <div className={`${flexBeetween} w-full`}>
              <div className={`${flexBeetween} gap-8 text-sm`}>
                <Link page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
                <Link page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
                <Link page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
                <Link page="Contact us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
              </div>
              <div className={`${flexBeetween} gap-8`}>
                <p>Signin</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar