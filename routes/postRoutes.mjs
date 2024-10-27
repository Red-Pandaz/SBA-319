import express from 'express'
import Post from '../models/postSchema.mjs'

const router = express.Router()

router.post('/', async (req, res) =>{
    try{
        let newPost = new Post(req.body)
        await newPost.save()
        res.json(newPost)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
} )

router.get('/', async (req, res) =>{
    try {
        let allPosts = await (Post.find({}))
        console.log("all posts: ", allPosts)
        console.log(Post)
        res.json(allPosts)
        res.status(allPosts)
    } catch(err){
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

router.put('/:id', async (req, res) =>{
    try {
        let updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedPost)
    } catch(err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        let deletedPost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletedPost)
    } catch(err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

export default router;