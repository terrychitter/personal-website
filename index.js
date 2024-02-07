// import { Octokit } from "octokit";

// const octokit = new Octokit({
//     auth: "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"
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