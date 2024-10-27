import express from 'express'
import Comment from '../models/commnentSchema.mjs'

const router = express.Router()

router.post('/', async (req, res) =>{
    try{
        let newComment = new Comment(req.body)
        await new Comment.save()
        res.json(newComment)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
} )

router.get('/', async (req, res) =>{
    try {
        let allComments = await (Comment.find({}))
        res.json(allComments)
    } catch(err){
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

router.put('/:id', async (req, res) =>{
    try {
        let updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedComment)
    } catch(err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        let deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.json(deletedComent)
    } catch(err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error'})
    }
})

export default router;