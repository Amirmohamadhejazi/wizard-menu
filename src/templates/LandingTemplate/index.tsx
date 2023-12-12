'use client'
import { useState } from 'react'
import { CiUser } from 'react-icons/ci'

type TDataMenu = { name: string; stage: number; id: number }
const LandingTemplate = () => {
    const dataMenu: TDataMenu[] = [
        { name: 'Profile', stage: 3, id: 1 },
        { name: 'Family', stage: 2, id: 2 },
        { name: '3', stage: 3, id: 3 },
        { name: '4', stage: 3, id: 4 },
    ]

    const [step, setStep] = useState<{
        step: number
        stage: number
    }>({
        step: 1,
        stage: 0,
    })
    //
    const handlerNext = () => {
        if (step.stage === dataMenu[step.step - 1].stage) {
            if (dataMenu.length > step.step) {
                setStep((prev) => {
                    return { step: prev.step + 1, stage: 1 }
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
    console.log(step)

    const handlerBack = () => {
        console.log('back', dataMenu[step.step - 1].stage)
    }

    return (
        <div className='h-screen flex flex-col justify-start items-center mx-56 py-12'>
            <div className='w-full flex justify-around items-center'>
                {dataMenu.map((itemsMenu) => (
                    <div className='flex gap-3 items-center' key={itemsMenu.id}>
                        <div className='flex flex-col items-center'>
                            <div
                                className={`flex items-center justify-center w-12 h-12 shadow-lg rounded-full text-3xl font-semibold  ${`bg-[#9CA3AF] text-white`}`}
                            >
                                <CiUser />
                            </div>
                            <span>{itemsMenu.name}</span>
                        </div>
                        {dataMenu.length !== itemsMenu.id ? (
                            <div className='relative bg-[#EAF3FF] rounded-md w-[200px] h-[10px] overflow-hidden'>
                                <div
                                    className='h-full absolute right-0 top-0 duration-300'
                                    style={{
                                        width: `${(step.stage / dataMenu[step.step - 1].stage) * 100}%`,
                                        background: 'red',
                                    }}
                                ></div>
                                {/* step stage dataMenu stage */}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
            </div>
            <div className='flex gap-2 items-center'>
                <span className='p-2 bg-blue-200 cursor-pointer rounded-md' onClick={handlerBack}>
                    back
                </span>
                <span className='p-2 bg-blue-200 cursor-pointer rounded-md' onClick={handlerNext}>
                    next
                </span>
            </div>
        </div>
    )
}

export { LandingTemplate }
