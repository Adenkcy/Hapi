import Hapi from '@hapi/hapi'
import dotenv from 'dotenv'
import {myPlugin} from "./routes/User.js";
import {dbconn} from "./database/data.js";

import path from "path";
import {fileURLToPath} from 'url'
import  {dirname} from 'path'
import Inert from "@hapi/inert";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config()
const init = async  ()=>{
    const  server = Hapi.server({
        port:process.env.PORT|| 5000,
        host:'localhost',
        routes:{
         files:{
             relativeTo:path.join(__dirname,'dist')
         },
         
                       cors:{
               origin: ['*'], // an array of origins or 'ignore'
               credentials: true // boolean - 'Access-Control-Allow-Credentials'
           }
       }
    })
    
   
   
  await  server.register(myPlugin)
   await server.register({
       plugin:dbconn
   })
    await server.register(Inert)
    server.route({
        method:'GET',
        path:'/{param*}',
        handler:{
            directory:{
                path:'.',
                index:['index.html'],
                listing:true
            }
         
        
        },
        options:{
            auth:{
                mode:"try"
            },
            cors:{
                credentials:true,
                origin:['*']
            }
        }
        
    })
 
    await server.start()
    console.log('server running  on %s', server.info.uri)
}
process.on('unhandledRejection',(err)=>{
    console.error(err)

    process.exit(1)
})
init()