import Map from "../schemas/mapSchemas.js";
import { ctrlWrapper } from "../helpers/index.js";

const getMap = async (req, res) => {
    const result = await Map.find({});
    res.json(result);
};

const addMap = async (req, res) => {
    const result = await Map.create({ ...req.body });

    res.status(201).json(result);
};

const deleteMap = async (req, res) => {
    const result = await Map.deleteMany({});
    res.status(200).json(result);
};

export default {
    getMap: ctrlWrapper(getMap),
    addMap: ctrlWrapper(addMap),
    deleteMap: ctrlWrapper(deleteMap),
};
