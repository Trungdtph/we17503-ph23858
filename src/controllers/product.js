import Product from '../models/product';


export const create = async (req, res) => {
    try {

        const product = await Product.create(req.body);
        res.status(201).json({
            message: 'Tao san pham thanh cong',
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const getAll = async (req, res) => {
    try {

        const product = await Product.find();
        res.status(201).json({
            message: 'Hien thi thanh cong',
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};
export const get = async (req, res) => {
    try {

        const product = await Product.findById({ _id: req.paramas.id });
        res.status(201).json({
            message: 'Hien thi thanh cong',
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.paramas.id }, req.body, { new: true });
        res.status(201).json({
            message: 'Cap nhat thanh cong',
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};

export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete({ _id: req.paramas.id });
        res.status(201).json({
            message: 'Cap nhat thanh cong',
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}
