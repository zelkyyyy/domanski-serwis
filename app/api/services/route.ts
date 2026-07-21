import { NextResponse } from 'next/server';
import services from '@/public/data/services.json';

export async function GET() {
    return NextResponse.json(services);
}

