import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets//SponsorForbes.png"
import SponsorFortune from "@/assets//SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function index({ setSelectedPage }: Props) {
    const isAbodeMedumScreen = useMediaQuery("(min-width:1024px)")


    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-20 md:h-full md:pb-0'
        >
            {/* IMAGE AND MAIN DIV HEADER */}
            <div className='md:flex xl:flex mx-auto w-5/6  items-center justify-center md:h-5/6 '>
                {/* Main Header */}
                <div className='z-10 md:basis-3/5'>
                    {/* Headings */}
                    <div className='md:-mt-20 xl:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-12 before:-left-10 before:z-[-1] md:before:content-evolvetext'>
                                <img alt='home-page-txt' src={HomePageText} />
                            </div>
                        </div>

                        <p className='mt-8 text-sm md:text-lg xs:text-sm xl:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni iste eligendi
                            doloribus est ullam neque atque natus perferendis, dolorem adipisci praesentium,
                            voluptatum ut iure nam. Sequi obcaecati dolorum autem.
                        </p>
                    </div>
                    {/* ACTIONS */}
                    <div className='mt-8 flex items-center gap-8 md:justify-start xl:justify-start'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:bg-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-3/5 justify-center md:z-10'>
                    <img alt='home-pageGraphic' src={HomePageGraphic} />
                </div>
            </div>

            {/* Sponsers */}
            {isAbodeMedumScreen && (
                <div>
                    <div>
                        <div>
                            <img alt='redbull-sponsor' src={SponsorRedBull} />
                            <img alt='Forbes-sponsor' src={SponsorForbes} />
                            <img alt='Fortune-sponsor' src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default index