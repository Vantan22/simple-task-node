const Task = require("../models/task");
const User = require("../models/user");
exports.createTask = async (req, res, next) => {
  const {
    name,
    projectId,
    sectionId,
    assignedTo,
    dueDate,
    description,
    tags,
    checklist,
  } = req.body;

  try {
    const attachments = req.attachments || [];
    const task = new Task({
      name,
      project: projectId,
      section: sectionId || null,
      assignedTo,
      dueDate,
      description,
      tags: tags || [],
      checklist: checklist || [],
      attachments,
    });

    const savedTask = await task.save();
    await User.updateMany(
      { _id: { $in: task.assignedTo } },
      { $push: { tasks: savedTask._id } },
      { new: true, useFindAndModify: false },
    );
    res.status(201).json({ message: "Task created!", taskId: savedTask._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
