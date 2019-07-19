var config = {
    apiKey: "AIzaSyDevI0wPWsP6rxdnFBJM5W93dvNvXVjqFE",
    authDomain: "utility-zenith-227711.firebaseapp.com",
    projectId: "utility-zenith-227711"
};
firebase.initializeApp(config);

var db = firebase.firestore();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getId(){
    return getUrlVars()["id"];
}

function getBlog(callback)
{
    db.collection("blogs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.id == getId()){
                callback(doc);
            }
        });
    });
}

function saveBlog(data, success_callback,fail_callback){
    if(getId() == null){
        addBlog(data,success_callback,fail_callback);
    }else{
        editBlog(data,success_callback,fail_callback);
    }
} 

function addBlog(data, success_callback,fail_callback){
    db.collection("blogs").add(data).then(function(docRef) {
        success_callback(docRef);
    }).catch(function(error) {
        fail_callback(error);
    });
} 

function editBlog(data, success_callback,fail_callback){
    db.collection("blogs").doc(getId()).set(data).then(function(){
        success_callback(data);
    }).catch(function(error) {
        fail_callback(error);
    });
} 

function deleteBlog(data, success_callback,fail_callback){
    db.collection("blogs").doc(getId()).delete().then(function() {
        success_callback();
    }).catch(function(error) {
        fail_callback(error);
    });
} 

function getBlogs(){
    alert('xxx');
    // db.collection("blogs").orderBy("date","desc").get().then((querySnapshot) => {
    //     return querySnapshot;
    // });
}