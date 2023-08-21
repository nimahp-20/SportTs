import React from 'react'

import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'State of the Art Facilities',
        description: "Neque Adipiscing amet amet enim. Fequiat dolor de akhoz menatikonesta"
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse classess",
        description: "Neque Adipiscing amet amet enim. Fequiat dolor de akhoz menatikonesta"
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Expert and pro trainers',
        description: "Neque Adipiscing amet amet enim. Fequiat dolor de akhoz menatikonesta"
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Benefits({ setSelectedPage }: Props) {

    return (
        <section id='benefits'
            className='mx-auto min-h-full w-5/6 py-20'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <div className='md:my-5 md:w-3/5'>
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className='my-5 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem nam doloremque laudantium neque iure veniam placeat,
                        voluptas atque quae esse blanditiis non voluptatum dolores quam! Possimus sequi quod incidunt corrupti.
                    </p>
                </div>

                <div className='md:flex mt-5 items-center justify-between gap-8'>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits