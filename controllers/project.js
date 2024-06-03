const User = require("../models/user");
const Project = require("../models/project");

exports.createProject = async (req, res, next) => {
  try {
    const { fileUrls } = req;
    const imageUrl = fileUrls ? fileUrls[0] : null;
    const { name, category, budget, dueDate, members } = req.body;
    const processedMembers = Array.isArray(members) ? members : [members];

    // Check for duplicate members
    const uniqueMembers = [...new Set(processedMembers)];
    if (uniqueMembers.length !== processedMembers.length) {
      return res.status(400).json({ message: "Duplicate member IDs found" });
    }

    // Validate member IDs
    const users = await User.find({ _id: { $in: uniqueMembers } });
    const existingMemberIds = users.map((user) => user._id.toString());
    const nonExistentMembers = uniqueMembers.filter(
      (memberId) => !existingMemberIds.includes(memberId),
    );

    if (nonExistentMembers.length > 0) {
      return res.status(400).json({
        message: "Members not found",
        nonExistentMembers,
      });
    }

    // Create project
    const project = new Project({
      name,
      category,
      dueDate,
      budget,
      image: imageUrl,
      members: uniqueMembers,
    });

    const savedProject = await project.save();

    // Update user projects
    await User.updateMany(
      { _id: { $in: uniqueMembers } },
      { $push: { projects: savedProject._id } },
    );

    res.status(201).json({
      message: "Project created!",
      projectId: savedProject._id,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
