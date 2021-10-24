<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="name"
      class="elevation-1"
      :items-per-page="5"
      @click:row="serverPage"
    >
      <!-- 테이블위에 표시할 내용이 있으면 여기에다가 한다. -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            >Post List
            <span v-if="tagname" class="body-1 font-italic ml-3"
              >(with {{ tagname }} tagged)</span
            >
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click.stop="dialogOpen('create', {})"
            >New Post</v-btn
          >
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click.stop="dialogOpen('update', item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click.stop="deletePost(item)"> mdi-delete </v-icon>
      </template>
      <!-- 테이블에 내용이 없으면 보여줄 내용을 정의한다. -->
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList"> Reset </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <!-- form의 각 필드를 채워줄 때는 value 속성을 이용한다. -->
        <v-card-text>
          <v-form id="post-form" ref="postForm">
            <v-text-field name="id" label="ID" v-model="editedItem.id" readonly></v-text-field>
            <v-text-field name="title" label="TITLE" v-model="editedItem.title"></v-text-field>
            <v-text-field name="description" label="DESCRIPTION" v-model="editedItem.description"></v-text-field>
            <v-textarea outlined name="content" label="CONTENT" v-model="editedItem.content"></v-textarea>
            <v-text-field name="owner" label="OWNER" v-model="editedItem.owner" readonly></v-text-field>
            <v-text-field name="tags" label="TAGS" v-model="editedItem.tags"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import EventBus from './event_bus';
export default {
  // name: "HelloWorld",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      //텍스트는 화면에 출려되는 문자열, vlaue는 이 컬럼에 데이터가 들어있는 변수명
      { text: "제 목", value: "title" },
      { text: "요 약", value: "description" },
      { text: "수정일", value: "modify_dt" },
      { text: "작성자", value: "owner" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    posts: [],
    tagname: "",
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
    actionKind: '',
    me: {user:'Anonymous'},
  }),
  computed: {
    formTitle() {
      // return this.editedIndex === -1 ? "Create Item" : "Update Item";
      if (this.actionKind === 'create') return 'Create Item';
      else return 'Update Item';
    },
  },
  created() {
    const params = new URL(location).searchParams;
    this.tagname = params.get("tagname");
    this.fetchPostList();

    // me_change라는 이벤트를 수신하면, 이 함수를 실행하라는 의미이다. val은 이벤트 버스로 받은 값을 의미한다.
    // 엄밀히 말하면, 이벤트를 수신하는 것이 아닌, 이벤트와 그 핸들러를 등록하는 것이다.
    EventBus.$on('me_change', (val)=>{
      this.me = val;
    });
  },
  methods: {
    fetchPostList() {
      console.log("fetchPostList()...", this.tagname);

      let getUrl = "";
      if (this.tagname) getUrl = `/api/post/list/?tagname=${this.tagname}`;
      else getUrl = "/api/post/list";

      axios
        .get(getUrl)
        .then((res) => {
          console.log("POST LIST GET RES!!", res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("POST LIST ERR RES!!", err.response);
          alert(err.response, status + "" + err.response.statusText);
        });
    },

    serverPage(item) {
      console.log("serverPage()...", item);
      location.href = `/blog/post/${item.id}`;
    },

    dialogOpen(actionKind, item) {
      if(this.me.username === 'Anonymous'){
        alert("Please login first!");
        return;
      }
      console.log("dialogOpen()...", actionKind, item);
      this.actionKind = actionKind;
      if(actionKind === 'create'){
        this.editedIndex = -1;
        this.editedItem = {};
      }
      else{
        this.editedIndex = this.posts.indexOf(item); // 현재 아이템의 인덱스를 구하는 코드
        this.editedItem = Object.assign({}, item); // 앞에있는 객체를 기준으로 뒤에있는 객체를 앞쳐준다. 그리고 그것을 editedItem에 넣어준다.
      }
      this.dialog = true;
    },
    cancel() {
      console.log("cancel()...");
      this.dialog = false;
    },

    save() {
      console.log("save()...");
      if(this.actionKind === 'create') this.createPost();
      else this.updatePost();
      this.dialog = false;
    },

    createPost(){
      console.log("createPost()...");
      const postData = new FormData(document.getElementById('post-form'));
      axios.post('/api/post/create/', postData)
      .then( res =>{
        console.log("CREATE POST POST RES", res);
        this.posts.push(res.data);
      })
      .catch(err =>{
        console.log("CREATE POST ERR.RESPONSE", err.response);
        alert(err.response.status + '' + err.response.statusText);
      });
    },

    updatePost(){
      console.log("updatePost()...");
      const postData = new FormData(document.getElementById('post-form'));
      postData.set('owner', this.me.id);
      axios.post(`/api/post/${this.editedItem.id}/update/`, postData)
      .then( res =>{
        console.log("UPDATE POST POST RES", res);
        this.posts.splice(this.editedIndex, 1, res.data);
      })
      .catch(err =>{
        console.log("UPDATE POST ERR.RESPONSE", err.response);
        alert(err.response.status + '' + err.response.statusText);
      });
    },

    deletePost(item){
      console.log("deletePost()...", item);
      if(this.me.username === 'Anonymous'){
        alert("Please login first!");
        return;
      }
      if(!confirm("Are you sure to delete ?")) return;
      axios.delete(`/api/post/${item.id}/delete/`)
      .then(res =>{
        console.log("DELETE POST DELETE RES", res);
        const index = this.posts.indexOf(item);
        this.posts.splice(index, 1);
      })
      .catch(err =>{
        console.log("DELETE POST ERR.RESPONSE", err.response);
        alert(err.response.status + '' + err.response.statusText);
      });
    },
  },
};
</script>

<style scoped>
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
</style>