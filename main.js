new Vue({
    el:"#app",
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmission(){
            return this.submissions.sort( (a,b) =>{
                return b.votes- a.votes
            });
        }
    },
});