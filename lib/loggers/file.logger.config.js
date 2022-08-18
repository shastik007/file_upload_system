import  { transports , format} from "winston";

const { File } = transports

export const loggerConfig = {
    transports :[
        new File({
            filename:'files_system_succes.log',
            level:'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new File({
            filename:'files_system_error.log',
            level:'error',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
}

