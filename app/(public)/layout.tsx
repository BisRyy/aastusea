import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/layout/navbar';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;