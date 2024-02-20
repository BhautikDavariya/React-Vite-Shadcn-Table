import ModeToggle from '@/components/ui/mode-toggle'
import React from 'react'
import { DashboardHeader } from './header';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SideBar from './SideBar';


const MasterLayout = ({ children }) => {
    return (
        <div>
            <div>
                <DashboardHeader heading={'Acidimetry'} className={'p-3'}>
                    <div className='flex'>
                        <div className='me-2'><ModeToggle /></div>
                        <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </DashboardHeader>
            </div>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <div className='w-full h-[calc(100vh-66px)]'>
                    <div className='p-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterLayout