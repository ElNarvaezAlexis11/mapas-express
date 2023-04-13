const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    //agrupamos por estados
    const estados = await prisma.aiuda.groupBy({
        by: ['C_ADMINISTRATIVA'],
        select: {
            C_ADMINISTRATIVA: true,
        }
    });
    //agrupamos por turno
    const turnos = await prisma.aiuda.groupBy({
        by: ['C_TURNO_1'],
        select: {
            C_TURNO_1: true,
        }
    });
    //agrupamos por sostenimienot
    const sostenimientos = await prisma.aiuda.groupBy({
        by: ['SOSTENIMIENTO_C_CONTROL'],
        select: {
            SOSTENIMIENTO_C_CONTROL: true,
        }
    });

    //Recuperamos las query string si es que existen 
    const estado = req.query.estado ?? '';
    const turno = req.query.turno ?? '';
    const sost = req.query.sost ?? '';
    const limit = req.query.limit ?? 5;

    const locations = await prisma.aiuda.findMany({
        where: {
            C_ADMINISTRATIVA: estado,
            C_TURNO_1: turno,
            SOSTENIMIENTO_C_CONTROL: sost
        },
        select: {
            INMUEBLE_LATITUD: true,
            INMUEBLE_LONGITUD: true
        },
        take: Number(limit)
    });

    res.render('index', {
        estados,
        turnos,
        sostenimientos,
        locations,
        estado,
        turno,
        sost,
        limit: Number(limit)
    });
});

module.exports = router

