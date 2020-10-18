
// for login
let loginContent = {
        username: document.getElementById('username'),
        password: document.getElementById('password')
    }

let login  = function() {
    let errorFlag = 0;
    if (loginContent.username.value === ''){
        errorFlag =1;
        document.getElementById('loginUserName').innerText= 'Enter username';
    }
    else{
        document.getElementById('loginUserName').innerText= '';
        errorFlag = 0;
    }
        
    if (loginContent.password.value === ''){
        errorFlag=1;
        document.getElementById('loginPassword').innerText= 'Enter password';
    }
    else{
        document.getElementById('loginPassword').innerText= '';
        errorFlag=0;
    }
    if(errorFlag === 0) {
        window.location.replace('index.html')
    }

};


// for new blog
let postContent = {
    title: document.getElementById('title'),
    blog: document.getElementById('blog')
}

let postBlog = function() {
    let errorFlag = 0;
    if (postContent.title.value === ''){
        errorFlag =1;
        document.getElementById('textErr').innerText= 'Enter blog Title';
    }
    else{
        document.getElementById('textErr').innerText= '';
        errorFlag = 0;
    }
        
    if (postContent.blog.value === ''){
        errorFlag=1;
        document.getElementById('blogErr').innerText= 'Enter Your Blog';
    }
    else{
        document.getElementById('blogErr').innerText= '';
        errorFlag=0;
    }
    if(errorFlag === 0) {
        window.alert('Than You For Your Post !!!');
        window.location.replace('index.html');
    }
}

