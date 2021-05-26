export default class Service {
    private vue!:any;
    private $api!:any;
    public initPage(vue){
        this.vue = vue;
        this.$api = vue.$api;
        this.getNoteList();
    }
    private getNoteList(){
        this.$api.getNoteList().then(res=>{
            this.vue.noteList = res.data.noteList;
        })
    }
}
