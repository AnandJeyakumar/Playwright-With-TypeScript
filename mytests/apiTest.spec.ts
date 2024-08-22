import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { request } from "http";


var userId:any;

test("Get user", async({request})=>{

    const getUserResponse = await request.get("https://reqres.in/api/users?page=2")
    console.log("The Get User response is ", await getUserResponse.json())
    await expect(getUserResponse.status()).toBe(200)
    
})


test("create user", async({request})=>{
    const createUserResponse = await request.post("https://reqres.in/api/users",
                                                     {
                                                        data:{
                                                            "email": "ana.in",
                                                            "password": "pistol"
                                                        },
                                                        headers:{
                                                            "Accept":"application/json"
                                                         }
                                                     })
    await console.log("The post response" , await createUserResponse.json())
    await expect(createUserResponse.status()).toBe(201)

    var res = await createUserResponse.json()
    userId = res.id
    await console.log("The user ID is ---" ,userId)

})
test("update user", async({request})=>{
    const updateUserResponse = await request.put('https://reqres.in/api/users/'+userId,
        {
           data:{
               "email": "All.in",
               "password": "pistol"
           },
           headers:{
               "Accept":"application/json"
            }
        })
        await console.log("The Put Response is ", await updateUserResponse.json())
        await expect(await updateUserResponse.status()).toBe(200)
})
test("delete user", async({request})=>{
    const deleteUserResponse = await request.delete('https://reqres.in/api/users/'+userId)
        await console.log("The Delete Response statussss is ",  await deleteUserResponse.status())

        await expect(await deleteUserResponse.status()).toBe(204)
})


