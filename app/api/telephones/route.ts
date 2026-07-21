import { NextResponse } from 'next/server';
import telephones from '@/data/telephones.json';

export async function GET() {
    return NextResponse.json(telephones);
}

