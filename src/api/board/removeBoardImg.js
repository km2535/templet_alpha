export const removeBoardImg = async (board) => {
  const { ID } = board;
  const formData = new FormData();
  formData.append("fileId", ID);
  await fetch(`${process.env.REACT_APP_API_BOARDS_URL}/removeBoardImg.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return console.log(res);
    })
    .catch((err) => {
      return err;
    });
};