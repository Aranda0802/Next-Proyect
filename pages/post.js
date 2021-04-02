import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import {posts} from '../profile'
import {router} from 'next/dist/next-server/server/router'


const Post = () => {

    const router = useRouter();    

    const currentPost = posts.filter(post => post.title === router.query.title)[0]
    console.log(currentPost)
    return (

        <Layout footer={false} >
             <div className="text-center">
                 <img src='{}' alt="" className="img-fluid" style={{wight: '50%'}}/>
                 <p>currentPost.content</p>
             </div>
        </Layout>
    )
   
}
export default Post;