// https://github.com/Eckhardt-D/blanq/blob/ebd67ea1a44c908f73701b0153cc397c04d5c209/server/api/auth/%5B...all%5D.ts
// export default defineEventHandler(event => {
//   const config = useRuntimeConfig(event)
//   const enhancedRequest = new EnhancedRequest(toWebRequest(event))
//   enhancedRequest.__config = config
//   return serverAuth().handler(enhancedRequest)
// })

export default eventHandler(event => serverAuth().handler(toWebRequest(event)))
