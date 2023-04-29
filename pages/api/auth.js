import { url } from "./url";


async function makeGetRequest(req_url, headers = {
    "Content-Type": "application/json"
    }) {
        // Default options are marked with *
        const response = await fetch(req_url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: headers,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    console.log(req_url, "request url")
    return response.json(); // parses JSON response into native JavaScript objects
}

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

export  async function init_login(){
    makeGetRequest(`${url}/auth`).then((res)=>{
        window.location.assign(res.url)
        // window.location.href = res.url
    }).then(()=>console.log(window.location, "window"))
}

export async function login(id){
    makeGetRequest(`${url}/auth/login?user_id=${id}`).then((res)=>{
        localStorage.setItem("token", JSON.stringify(res.token))
        localStorage.setItem("user", JSON.stringify(res.user_info))
    })
}
