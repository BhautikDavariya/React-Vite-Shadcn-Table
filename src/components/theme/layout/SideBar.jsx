import React from 'react'
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar'

const SideBar = () => {
    return (
        <div className='h-[calc(100vh-66px)]'>
            <Sidebar className='h-[calc(100vh-66px)] bg-transparent'>
                <Menu className='bg-transparent'>
                    {/* <SubMenu label="User">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu> */}
                    <MenuItem className=' border-collapse border-x-0 border-t-0 border-b-2 '> User </MenuItem>
                    <MenuItem  className=' border-collapse border-x-0 border-t-0 border-b-2 '> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar