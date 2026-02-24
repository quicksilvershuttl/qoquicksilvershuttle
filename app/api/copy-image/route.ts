import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const src = 'C:\\Users\\Latitude 7420\\.gemini\\antigravity\\brain\\c6b21242-b813-44ed-9ecc-bb4f02f0d7f5\\google_review_card_1771776281662.png';
        const dest = path.join(process.cwd(), 'public', 'google_review.png');

        fs.copyFileSync(src, dest);

        return NextResponse.json({ success: true, message: 'Image copied successfully!' });
    } catch (err: any) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
