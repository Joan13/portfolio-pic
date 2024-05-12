import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request, response: NextApiResponse) {
    const dataa = await request.json();
    try {
        const resend = new Resend('re_7UyaeNXH_2KSjnrVqizUimLCjkibSoqfK');
        const { data } = await resend.emails.send({
            from: dataa.name + ' <onboarding@resend.dev>',
            to: 'shok.fm@gmail.com',
            subject: 'Contact',
            html:
                '<div>'
                + '<h3>' + dataa.name + ' (' + dataa.email + ')</h3>'
                + '<div>' + dataa.message + '</div>'
                + '</div>'
        })
        return NextResponse.json({ request })
    } catch (error) {
        return NextResponse.json({ 'message': "Error" })
    }
}

