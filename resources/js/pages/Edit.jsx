import { Head, useForm } from "@inertiajs/react"
import { route } from "../../../vendor/tightenco/ziggy/src/js";

export default function Edit( {post} ){
    const {data, setData, put, errors, processing} = useForm({
        body: post.body,
    })    

    function submit(e){
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route('posts.update', post));
    }

    return(
    <>
        <Head title="Edit"/>   

        <h1 className="title">Edit the post</h1>      

        <div className="w-2/3 mx-auto">
            <form onSubmit={submit}>
                <textarea rows="10"
                value={data.body}
                onChange={(e) => setData("body", e.target.value)}
                className={errors.body && '!ring-red-500'}
                ></textarea>

                {errors.body && <p>{errors.body}</p>}
               
                <button className="primary-btn mt-4"
                disabled={processing}
                > Update post</button>
                
              
            </form>
        </div>
    </>
    )
}
