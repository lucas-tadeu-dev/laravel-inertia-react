import { Head, useForm } from "@inertiajs/react"

export default function Create(){
    const {data, setData, post, errors, processing} = useForm({
        body: "",
    })

    console.log(useForm());
    console.log(errors);

    function submit(e){
        e.preventDefault();
        post("/posts");
    }
    return(
    <>
        <Head>
        <meta head-key="description"
        name="description" 
        content="This is the Create description" />
        </Head>
        <h1 className="title">Create a new post</h1>      

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
                > Create a post</button>
                
              
            </form>
        </div>
    </>
    )
}
