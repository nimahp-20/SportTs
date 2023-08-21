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
import { motion } from 'framer-motion'

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
            <motion.div
                className='md:flex xl:flex mx-auto w-5/6  items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main Header */}
                <div className='z-10 md:basis-3/5'>
                    {/* Headings */}
                    <motion.div
                        className='md:-mt-20 xl:-mt-20'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
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
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className='mt-8 flex items-center gap-8 md:justify-start xl:justify-start'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
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
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end md:mt-16'>
                    <img alt='home-pageGraphic' src={HomePageGraphic} />
                </div>
            </motion.div>

            {/* Sponsers */}
            {isAbodeMedumScreen && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between gap8'>
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