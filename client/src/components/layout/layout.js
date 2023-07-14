import react from 'react'
import Header from './header';
import Footer from './footer';
import {Helmet} from 'react-helmet'
import  { Toaster } from 'react-hot-toast'; 
//  import 'react-toastify/dist/ReactToastify.css';
const Layout=({children,description,keyword,author,title})=>{
    return(
<div>
<Helmet>

  <meta charSet="utf-8" />
  <meta name="description" content={description}/>
  <meta name="keyword" content={keyword} />
  <meta name="author" content={author} />
  <title>{title}</title>

    </Helmet>
    <Header/>
    <main style={{minHeight:'70vh'}}>
        <Toaster/>
        {children}
    </main>
    <Footer/>
</div>
    );
}
Layout.defaultProps={
    title:"shopiii app",
    description:"shopping website",
    keyword:'watch,shoes,saree,clothes,baby wear',
    author:'divya'
}
export default Layout