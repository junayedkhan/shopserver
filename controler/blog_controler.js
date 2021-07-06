import blog_model from "../model/blog_model.js";


export const create_blog = (req, res) => {
    try {
        let create_blog = new blog_model(req.body)
        create_blog.save()
        res.status(200).send(create_blog.updatedAt)
    } catch (error) {
        res.status(400) 
    }
}

export const get_blog = async(req, res) => {
    try {
        let get_blog = await blog_model.find({})
        get_blog.reverse()
        res.status(200).send(get_blog)
        console.log(get_blog)
    } catch (error) {
        res.status(400).json({ message: "blog not found !" })
    }
}
