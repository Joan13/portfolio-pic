import { SendEmail } from "@/app/utils/mail.utils"

export async function POST() {
    const sender = {
        name: 'Name Sender',
        address: 'no-reply@example.com'
    }

    const recipients = [{
        name: 'Joan Migani',
        address: 'joan.migani@gmail.com'
    }]

    try {
        const result = await SendEmail({
            sender,
            recipients,
            subject: 'message from user',
            message: "Welcome to our platform"
        })

        return Response.json({
            accepted: result.accepted
        })
    } catch (error) {
        return Response.json({
            message: "No"
        })
    }
}