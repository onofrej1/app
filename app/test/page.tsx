'use client';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
//import { use } from 'react';
import { ExpandLess, ExpandMore, People } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import PeopleIcon from '@mui/icons-material/People';

/*async function getData() {
    const resp = await fetch('api/test');
    const data = resp.json();
    return data;    
}

const data = getData();*/

export default function Page() {
    //const d = use(data);
    //console.log(d);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/test')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    console.log(data);

    return (
        <div>
            <Button variant="contained">Hello World</Button>
            {data.map(d => <div key={d.id}>{d.title}</div>)}
            <PeopleIcon />
        </div>
    )
}
