// import { Octokit } from "octokit";

// const octokit = new Octokit({
//     auth: ""
// })

// async function fetchRepos() {
//     try {
//         const response = await octokit.request('GET /users/terrychitter/repos', {
//             username: 'terrychitter',
//             headers: {
//                 'X-GitHub-Api-Version': '2022-11-28'
//             }
//         });
//         console.log("Repos: ", response.data);
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }