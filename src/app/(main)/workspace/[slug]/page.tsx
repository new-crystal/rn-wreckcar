'use client'
import WChart from '@/components/workspace/WChart';
import WSearch from '@/components/workspace/WSearch';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function WorkSpaceMain({ params }: { params: { slug: string } }) {
    console.log(params)
    const pathname = usePathname()
    console.log(pathname)
    console.log()
    return (
        <div>
            <WSearch />
            <WChart />
        </div>
    );
}

