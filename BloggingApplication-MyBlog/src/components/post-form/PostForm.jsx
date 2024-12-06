import React,{ useCallback } from "react";
import { get, useForm } from "react-hook-form";
import Button from "../Button"
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function PostForm({post}){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || active
        }
    })
    // example
    // {
    //     title: "My Blog Post",
    //     slug: "my-blog-post",
    //     content: "This is the content.",
    //     status: "active"
    // }


    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData) // data from store
    const submit = async(data) => {
        if(post){
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if(file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file? file.$id : null
            })
            if(dbPost){
                navigate("/post/${dbPost.$id}")
            }else{
                const file = await appwriteService.uploadFile(data.image[0])
                if(file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    await appwriteService.createPost({
                        ...data, userId: userData.$id
                    })

                    if(dbPost){
                        navigate("/post/${dbPost.$id}")
                    }
                }
            }
        }
    }
// transform value into url friendly string like title = my book to slug = my-book
    const slugTransform = useCallback((value) => {
        if(value && typeof value === "string"){
            return value.trim().toLowerCase()
            .replace(/[6a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g, "-") // replace(regex value, replacewith "-")you can chatgpt it
        }
    }, [])

        React.useEffect(() => {
            watch((value, {name}) => {
                if(name === "title"){
                    setValue("slug", slugTransform(value.title), {shouldValidate: true})
                }
            })
        },[watch, slugTransform, setValue])

        return (
            <form onSubmit={handleSubmit}
            className="flex flex-wrap" >
                <div className="w-2/3 px-2">
                    <Input
                    label = 'Title'
                    placeholder = 'Title'
                    className = "mb-4"
                    {...register("title", {required: true})} //Registers the title field with react-hook-form under the key "title". other fields automatically add.
                    />
                    <Input
                    label = 'Slug :'
                    placeholder = 'Slug'
                    className = "mb-4"
                    {...register("slug", {required: true})}
                    onInput = {(e) => {
                        setValue("slug", slugTransform(e.target.value), {shouldValidate: true})
                    }}
                    />
                    <RTE
                        label="Content: "
                        name= "content"
                        control={control}
                        defaultValue= {getValues("content")}
                    />
                </div>
                <div className="1/3 px-2">
                    <Input
                    label = "Featured Image"
                    type = "file"
                    className = "mb-4"
                    accept = "image/png, image/jpg, image/jpeg"
                    {...register("image", {required: !post})}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                            src={appwriteService.previewFile(post.featuredImage)} alt={post.title}
                            className="w-full h-48 object-cover rounded-lg"
                            />

                        </div>
                    )}
                    <Select
                    options = {["active", "inactive"]}
                    label = "Status"
                    className = "mb-4"
                    {...register("status", {required: true})}
                    />
                    <Button
                        type="submit"
                        bgColor= {post ? "bg-green-500" : undefined}
                        className="w-full"
                    >{post ? "Update" : "Submit" }</Button>
                </div>
            </form>
        )
}