class Repo {
    constructor(name, desc, link, languages) {
        this.name = name;
        this.desc = desc;
        this.link = link;
        this.languages = languages;
    }
}

const getRepos = async () => {
    // Get all public repositories
    const response = await fetch('https://api.github.com/users/terrychitter/repos');
    const data = await response.json();

    return data;
}

getRepos()
    .then(data => console.log(data))
    .catch(error => console.log(error));