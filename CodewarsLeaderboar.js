// Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order

// Note:
// if it was the bad timing, the data could be updated during your test cases.
// Try several times if you had such experience.

const getLeaderboardHonor = async () => {
    const list = []
    return fetch("https://www.codewars.com/users/leaderboard")
        .then(res => res.text())
        .then(data => {
            const list = []
            const regex = /<td class="honor">(.*?)<\/td>/g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                list.push(parseInt(match[1].replace(',','')))
            }
            return list
        })
}

//(?<=<td class="honor">)(.*?)(?=<\/td>)

getLeaderboardHonor().then(res => console.log(res))