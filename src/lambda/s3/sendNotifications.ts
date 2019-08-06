import {S3Handler, S3Event} from 'aws-lambda'
import 'source-map-support/register'

export const handler: S3Handler = async (event: S3Event) => {
    for (const record of event.Records) {
        console.log('Processing S3 event for key: ', record.s3.object.key)
    } 
}