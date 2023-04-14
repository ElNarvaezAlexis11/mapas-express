const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");

const router = Router();
const prisma = new PrismaClient();

router.get('/state/:state', async (req, res) => {
    const { state } = req.params;
    const estado = await prisma.aiuda.groupBy({
        by: ['C_ADMINISTRATIVA','INMUEBLE_C_NOM_MUN'],
        where: {
            C_ADMINISTRATIVA: state
        },
        select: {
            INMUEBLE_C_NOM_MUN: true,
        }
    });
    res.json(estado);
});

module.exports = router
