'use server'
import { SQSClient, GetQueueUrlCommand, SendMessageCommand } from "@aws-sdk/client-sqs";

// Server action to send message
export async function sendMessage(formData: FormData) {
    
    const region = process.env.AWS_REGION;
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const queueName = process.env.AWS_SQS_QUEUE_NAME;

    if (!region || !accessKeyId || !secretAccessKey || !queueName) {
        return { error: "AWS environment variables are missing." };
    }

    const sqsClient = new SQSClient({
        region,
        credentials: {
            accessKeyId,
            secretAccessKey,
        }
    });

    interface ContactMessage {
        name: string;
        email: string;
        phone: string;
        message: string;
        time: string;
    }

    const contactMessage: ContactMessage = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
        time: new Date().toISOString()
    };

    const messageBody = JSON.stringify(contactMessage);

    try {
        const getQueueUrlCmd = new GetQueueUrlCommand({ QueueName: queueName });
        const { QueueUrl } = await sqsClient.send(getQueueUrlCmd);

        if (!QueueUrl) {
            return { error: "Could not retrieve SQS queue URL." };
        }

        const sendMsgCmd = new SendMessageCommand({
            QueueUrl,
            MessageBody: messageBody,
            MessageAttributes: {
                "Environment": {
                    DataType: "String",
                    StringValue: process.env.VERCEL_ENV || "development"
                }
            }
        });
        await sqsClient.send(sendMsgCmd);

        return { success: true };
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { error: err.message || "Failed to send message." };
        }
        return { error: "Failed to send message." };
    }
}

export default sendMessage;
