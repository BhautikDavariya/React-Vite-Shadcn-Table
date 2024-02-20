import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import {
    DotsHorizontalIcon, TrashIcon, Pencil2Icon, EyeOpenIcon, CopyIcon
} from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MasterLayout from '../layout/MasterLayout';
import { DataTable } from '@/components/common/dataTable/DataTable';
import { fetchUsers } from '@/store/action/usersAction';
// import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner"
import DataTableUI from '@/components/table-components/tasks/DataTableUI';

const Index = () => {
    // const { toast } = useToast();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const onSubmit = (data) => {
        const value = JSON.parse(data)
        // toast({
        //     title: "User Info",
        //     description: (
        //         <div>
        //             <div>Name: {value.original.name}</div>
        //             <div>Email: {value.original.email}</div>
        //             <div>Phone: {value.original.phone}</div>
        //             <div>Username: {value.original.username}</div>
        //             <div>Website: {value.original.website}</div>
        //             <div>Company: {value.original.company}</div>
        //             <div>Address: {value.original.address}</div>
        //         </div>
        //     ),
        // });
        toast("User Info", {
            description: (
                <div>
                    <div>Name: {value.original.name}</div>
                    <div>Email: {value.original.email}</div>
                    <div>Phone: {value.original.phone}</div>
                    <div>Username: {value.original.username}</div>
                    <div>Website: {value.original.website}</div>
                    <div>Company: {value.original.company}</div>
                    <div>Address: {value.original.address}</div>
                </div>
            ),
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })
    }

    const data = user && user.length ? user.map((items) => {
        return {
            id: items.id,
            name: items.name,
            email: items.email,
            phone: items.phone,
            username: items.username,
            website: items.website,
            company: items.company.name,
            address: items.address.city,
        }
    }) : []

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => { table.toggleAllPageRowsSelected(!!value) }}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => { row.toggleSelected(!!value) }}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: "id",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("id")}</div>
            ),
        },
        {
            accessorKey: "name",
            header: "name",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "username",
            header: "username",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("username")}</div>
            ),
        },
        {
            accessorKey: "email",
            header: "email",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("email")}</div>
            ),
        },
        {
            accessorKey: "phone",
            header: "phone",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("phone")}</div>
            ),
        },
        {
            accessorKey: "address",
            header: "address",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("address")}</div>
            ),
        },
        {
            accessorKey: "company",
            header: "company",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("company")}</div>
            ),
        },
        {
            accessorKey: "website",
            header: "website",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("website")}</div>
            ),
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const { id } = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(id)}
                            >
                                <CopyIcon className='text-blue-600 me-2 w-5 h-5' /> <span>Copy User ID</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => onSubmit(JSON.stringify(row))}><EyeOpenIcon className='text-green-500 me-2 w-5 h-5' /> <span>View User</span></DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSubmit(JSON.stringify(row))}><Pencil2Icon className='text-cyan-500 me-2 w-5 h-5' /> <span>Edit User</span></DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSubmit(JSON.stringify(row))}><TrashIcon className='text-red-500 me-2 w-5 h-5' /> <span>Delete User</span></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <MasterLayout>
            {/* <DataTable data={data} columns={columns} filterValue={'name'} /> */}
            <DataTableUI />
        </MasterLayout>
    )
}

export default Index