import { useEffect, useState } from 'react';
import { getAllClient } from '../api/clients.api';
import { ClientCard } from "./ClientsCard";

export function ClientList() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        
        async function loadClients() {
            const res = await getAllClient()
            setClients(res.data)
        }
        loadClients()
    }, [])

    return <div className='grid grid-cols-3 gap-3'>
        {clients.map(client => (
            <ClientCard key={client.id} clients={client} />
        ))}
        </div>;
}