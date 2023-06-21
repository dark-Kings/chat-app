// import { Redis } from '@upstash/redis'

// export const db =new Redis({
//     // url:process.env.UPSTASH_REDIS_REST_UR,
//     url:"https://apn1-secure-turtle-35459.upstash.io",
//     // token:process.env.UPSTASH_REDIS_REST_TOKEN,
//     token:"AYqDASQgYmYzYmIxYmEtNzNiZS00MDg4LTk4MTgtZDY0MDhmYzVmYzA2YjE4OGExOTJjNDhlNDZjYjhiZjQ1MThkZjZkZjNkYmE="
// })



import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})