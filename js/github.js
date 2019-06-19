class Github {
  constructor(){
    this.client_id = 'a5c85d2e49baec1a793a';
    this.client_secret = 'ca0a6a7e9a8b2bce96eb22dd17f345d9bc8f4ea4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return { profile, repos };
  }
}