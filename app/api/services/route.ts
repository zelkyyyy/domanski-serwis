import { NextResponse } from 'next/server';
import services from '@/data/services.json';

export async function GET() {
    return NextResponse.json(services);
}

export async function GetById(id: string) {
    const service = services.find((service) => service.id === id);
    if (!service) {
        return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service);
}