interface GitHubUser {
    login: string;
    name: string | null;
    public_repos: number;
    followers: number;
    bio: string | null;
}

interface GitHubRepo {
    name: string;
    language: string | null;
    stargazers_count: number;
}

function isGitHubUser(data: unknown): data is GitHubUser {
    return (
        typeof data === "object" &&
        data !== null &&
        "login" in data &&
        typeof (data as Record<string, unknown>).login === "string"
    );
}

async function runLab() {
    const username = "mohamedbarakat66";

    const userRes = await fetch(`https://api.github.com/users/${username}`);

    if (!userRes.ok) {
        throw new Error(`Failed to fetch user. Status: ${userRes.status}`);
    }

    console.log(`Status: ${userRes.status}`);
    console.log(`OK: ${userRes.ok}`);
    console.log(`Status Text: ${userRes.statusText}`);
    console.log(`Content-Type: ${userRes.headers.get("content-type")}`);

    const remaining = userRes.headers.get("x-ratelimit-remaining");
    console.log(`Rate Limit Remaining: ${remaining}`);

    const userData: unknown = await userRes.json();

    if (isGitHubUser(userData)) {
        const displayName = userData.name ?? "No Name Provided";
        const bioText = userData.bio ?? "No Bio";
        console.log(`User: ${userData.login} (${displayName}) - Bio: ${bioText}`);
    }

    const reposUrl = new URL(`https://api.github.com/users/${username}/repos`);
    reposUrl.searchParams.append("sort", "updated");
    reposUrl.searchParams.append("per_page", "5");

    const reposRes = await fetch(reposUrl.toString());
    if (!reposRes.ok) {
        throw new Error(`Fetch repos failed: ${reposRes.status}`);
    }

    const repos = (await reposRes.json()) as GitHubRepo[];

    repos.forEach((repo) => {
        const lang = repo.language ?? "-";
        console.log(`- ${repo.name} | Lang: ${lang} | Stars: ${repo.stargazers_count}`);
    });

    const searchUrl = new URL("https://api.github.com/search/repositories");
    searchUrl.searchParams.append("q", "user:mohamedbarakat66 topic:javascript");
    console.log(`Encoded Search URL: ${searchUrl.toString()}`);

    const brokenHandUrl =
        `https://api.github.com/search/repositories?q=cats & dogs&sort=stars`;
    console.log(`Broken Manual URL: ${brokenHandUrl}`);

    const users = [
        "mohamedbarakat66",
        "octocat",
        "thisuserdoesnotexist123456789"
    ];

    const results = await Promise.all(
        users.map(async (u) => {
            try {
                const res = await fetch(`https://api.github.com/users/${u}`);
                if (!res.ok) return { user: u, error: `Error ${res.status}` };

                const data = await res.json();
                return { user: u, data };
            } catch {
                return { user: u, error: "Network error" };
            }
        })
    );

    results.forEach((res) => {
        if ("error" in res) {
            console.log(`User ${res.user}: ${res.error}`);
        } else {
            console.log(`User ${res.user}: Success (${res.data.login})`);
        }
    });
}

runLab().catch(console.error);
