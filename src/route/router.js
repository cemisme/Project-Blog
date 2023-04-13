import SignUpPage from "../pages/SignUpPage";
const PublicRouter = () => {
  
};
const PrivateRouter=()=>{

    const router = [
        {
          path: "/sigup",
          paged: SignUpPage,
        }]
    return router

}
export{PublicRouter, PrivateRouter}