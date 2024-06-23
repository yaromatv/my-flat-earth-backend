import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleSaveError, runValidatorsAndUpdate } from "./hooks.js";

const mapSchema = new Schema(
    {
        snapshot: {
            type: String,
            required: [true, "Set snapshot of a map"],
        },
        info: {
            type: Object,
            required: [true, "Set geo data"],
        },
    },
    { versionKey: false, timestamps: false }
);

mapSchema.post("save", handleSaveError);

mapSchema.pre("findOneAndUpdate", runValidatorsAndUpdate);
mapSchema.post("findOneAndUpdate", handleSaveError);

export const addMapSchema = Joi.object({
    snapshot: Joi.string().required().messages({
        "any.required": `missing required snapshot field`,
    }),
    info: Joi.object().required().messages({
        "any.required": `missing required info field`,
    }),
});

const Map = model("map", mapSchema);

export default Map;
