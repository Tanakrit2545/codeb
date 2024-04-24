//motorcycle-controller.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createMotorcycle = async (req, res, next) => {
  const { image, name, description, type, brand, price } = req.body;
  try {
    const motorcycle = await prisma.motorcycle.create({
      data: {
        image,
        name,
        description,
        type,
        brand,
        price,
      },
    });
    res.status(201).json({ motorcycle });
  } catch (error) {
    next(error);
  }
};

exports.getAllMotorcycles = async (req, res, next) => {
  try {
    const motorcycles = await prisma.motorcycle.findMany();
    res.status(200).json({ motorcycles });
  } catch (error) {
    next(error);
  }
};

exports.getMotorcycleById = async (req, res, next) => {
  const motorcycleId = req.params.id;
  try {
    const motorcycle = await prisma.motorcycle.findUnique({
      where: { id: parseInt(motorcycleId) },
    });
    if (!motorcycle) {
      return res.status(404).json({ message: "Motorcycle not found" });
    }
    res.status(200).json({ motorcycle });
  } catch (error) {
    next(error);
  }
};

exports.updateMotorcycleById = async (req, res, next) => {
  const motorcycleId = req.params.id;
  const { image, name, description, type, brand, price } = req.body;
  try {
    const updatedMotorcycle = await prisma.motorcycle.update({
      where: {
        id: parseInt(motorcycleId),
      },
      data: {
        image,
        name,
        description,
        type,
        brand,
        price,
      },
    });
    res.status(200).json({ motorcycle: updatedMotorcycle });
  } catch (error) {
    next(error);
  }
};

exports.deleteMotorcycleById = async (req, res, next) => {
  const motorcycleId = req.params.id;
  try {
    await prisma.motorcycle.delete({
      where: {
        id: parseInt(motorcycleId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
