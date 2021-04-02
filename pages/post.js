import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import {posts} from '../profile'
import {router} from 'next/dist/next-server/server/router'


const Post = () => {

    const router = useRouter();    

    const currentPost = posts.filter(post => post.title === router.query.title)[0]    

    return (

        <Layout footer={false} title={currentPost.title}>
             <div className="text-center">
                 <img src={currentPost.imageURL} alt="" className="img-fluid" style={{width: '50%'}}/>
                 <p>{currentPost.content}</p>
             </div>
        </Layout>
    )   

}
export default Post;