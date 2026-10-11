import { type NextRequest, NextResponse } from 'next/server'
import { client } from '@/app/api/utils/common'

export async function POST(request: NextRequest, { params }: { params: { messageId: string } }) {
    try {
        const { messageId } = params
        const response = await client.textToAudio(messageId)

        return new NextResponse(response.data as any, {
            headers: {
                'Content-Type': 'audio/mpeg',
            },
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error.status || 500 })
    }
}