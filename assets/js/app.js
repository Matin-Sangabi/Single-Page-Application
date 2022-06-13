// import pages in app 
import Home from '../../pages/Home.js' ; 
import Products from "../../pages/Products.js"; 
import Blog from "../../pages/Blog.js"; 

// function router

function router(){
    // add Array object for path 
    // view : function to show pages
    const routers = [
        {path : "/" , view : Home},
        {path : "/products" , view : Products},
        {path : "/blog" , view : Blog},
    ];

    // loop in routers  
    // * location.pathname => history of page
    const potentialRouter =  routers.map((item)=>{
        return {
            router : item, 
            isMatch : location.pathname === item.path, // ? return  Boolean (true , false)
        }
    });

    let findRouter = potentialRouter.find((find) => find.isMatch); // ? if isMatch true return 

    // * if not findRouter send user to 404 page

    if(!findRouter){
        findRouter = {
            router : {path : "/notFound" , view : ()=> console.log('notFound Page')},
            isMatch : true ,
        };
    }

    console.log(findRouter.router.view());
}

// !2 bugs // 1- not work in popstate 2-when refresh the page everything back to normal 
// * fixed bug num-1
window.addEventListener("popstate" , router);


function navigation(url){
    // *  use history.pushState
    history.pushState(null , null , url);
    router();
}

document.addEventListener("DOMContentLoaded" , ()=>{
    document.body.addEventListener("click" , (e)=>{
        // * 2 method to get data-link attribute 
        // ! 1 - the usee  hasAttribute method
        // ! 2 - the use matches method

        if(e.target.matches("[data-link]")){
            e.preventDefault();
            // * create navigation function 
            navigation(e.target.dataset.link);
        }
    });
    router();
});