const del = async (req, res, next) => {
    try {
        const result = await MODEL.deleteMany();
        return res.status(200).json("Deletado")
    } catch (error) {
        return res.status(403).json({error})
    }
}