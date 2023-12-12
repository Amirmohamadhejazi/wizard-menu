/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { FaRegAddressCard } from 'react-icons/fa'
import { IoTicketOutline } from 'react-icons/io5'
import { SlSocialYoutube } from 'react-icons/sl'

type TDataMenu = { name: string; icon: any; stage: number; id: number }
const LandingTemplate = () => {
    const dataMenu: TDataMenu[] = [
        { name: 'info', icon: <CiUser />, stage: 3, id: 1 },
        { name: 'social', icon: <SlSocialYoutube />, stage: 2, id: 2 },
        { name: 'address', icon: <FaRegAddressCard />, stage: 3, id: 3 },
        { name: 'ticket', icon: <IoTicketOutline />, stage: 1, id: 4 },
    ]

    const [step, setStep] = useState<{
        step: number
        stage: number
    }>({
        step: 1,
        stage: 0,
    })

    console.log(step)

    const handlerNext = () => {
        if (step.stage === dataMenu[step.step - 1].stage) {
            if (dataMenu.length > step.step) {
                setStep((prev) => {
                    return { step: prev.step + 1, stage: 0 }
                })
            }
        } else {
            if (dataMenu.length > step.stage) {
                setStep((prev) => {
                    return { ...prev, stage: prev.stage + 1 }
                })
            }
        }
    }

    const handlerBack = () => {
        if (step.stage !== 0) {
            setStep((prev) => {
                return { ...prev, stage: prev.stage - 1 }
            })
        } else {
            if (step.step !== 1) {
                setStep((prev) => {
                    return { stage: dataMenu[prev.step - 1 - 1].stage, step: prev.step - 1 }
                })
            }
        }
    }

    return (
        <div className='h-screen flex flex-col justify-start items-center mx-56 py-12'>
            <div className='w-full flex justify-around items-center'>
                {dataMenu.map((itemsMenu) => (
                    <div className='flex gap-3 items-center' key={itemsMenu.id}>
                        <div className='flex flex-col items-center'>
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full  border-4  p-1 duration-500 ${
                                    step.step > itemsMenu.id ||
                                    (step.step === dataMenu.length && step.stage === itemsMenu.stage)
                                        ? 'border-green-800'
                                        : `border-blue-800`
                                }`}
                            >
                                <div
                                    className={`flex items-center justify-center w-full  h-full  rounded-full text-3xl font-semibold duration-500 p-1 ${
                                        step.step > itemsMenu.id ||
                                        (step.step === dataMenu.length && step.stage === itemsMenu.stage)
                                            ? 'bg-[#127D48] text-white '
                                            : `bg-blue-800 text-white`
                                    }`}
                                >
                                    {itemsMenu.icon}
                                </div>
                            </div>
                            <span>{itemsMenu.name}</span>
                        </div>
                        {dataMenu.length !== itemsMenu.id ? (
                            <div className='relative bg-[#EAF3FF] rounded-md w-[200px] h-[10px] overflow-hidden'>
                                <div
                                    className='h-full absolute right-0 top-0 duration-300'
                                    style={{
                                        width:
                                            itemsMenu.id === step.step
                                                ? `${(step.stage / dataMenu[step.step - 1].stage) * 100}%`
                                                : step.step > itemsMenu.id
                                                ? '100%'
                                                : '',

                                        background: '#127D48',
                                    }}
                                ></div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
            </div>
            <div className='flex gap-2 items-center'>
                <span className='p-2 bg-blue-200 cursor-pointer rounded-md  select-none' onClick={handlerBack}>
                    back
                </span>
                <span className='p-2 bg-blue-200 cursor-pointer rounded-md select-none' onClick={handlerNext}>
                    next
                </span>
            </div>
        </div>
    )
}

export { LandingTemplate }
