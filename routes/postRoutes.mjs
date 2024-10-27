import express from 'express'
import Post from '../models/postSchema.mjs'

const router = express.Router()

router.post('/', async (req, res) =>{
    try{
        let newPost = new Post(req.body)
        await new Post.save()
        res.json(newPost)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
} )

router.get('/', async (req, res) =>{
    try {
        let allPosts = await (Post.find({}))
        res.json(allPosts)
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
        let deletedPost = await UPost.findByIdAndDelete(req.params.id)
        res.json(deletedPost)
    } catch(err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

export default router;