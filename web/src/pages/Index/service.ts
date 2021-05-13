export default class Service {
    private vue:any;
    public initPage(vue){
        this.vue = vue;
        this.getNoteList();
    }
    private getNoteList(){
        this.vue.$api.getNoteList().then(res=>{
            console.log(res);
        })
    }
}
