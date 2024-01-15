export const testController = (req, res) => {
  res.status(200).send({
    message: "Test Routes",
    success: true,
  });
};
export const testController1 = (req, res) => {
  res.status(200).send({
    message: "Test Routes",
    name: "umer zaman",
    success: true,
  });
};
